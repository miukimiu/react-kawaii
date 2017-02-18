import Node from '../Node.js';
import CompileError from '../../utils/CompileError.js';

export default class AssignmentExpression extends Node {
	initialise ( transforms ) {
		if ( this.left.type === 'Identifier' ) {
			const declaration = this.findScope( false ).findDeclaration( this.left.name );
			if ( declaration && declaration.kind === 'const' ) {
				throw new CompileError( this.left, `${this.left.name} is read-only` );
			}

			// special case – https://gitlab.com/Rich-Harris/buble/issues/11
			const statement = declaration && declaration.node.ancestor( 3 );
			if ( statement && statement.type === 'ForStatement' && statement.body.contains( this ) ) {
				statement.reassigned[ this.left.name ] = true;
			}
		}

		super.initialise( transforms );
	}

	transpile ( code, transforms ) {
		if ( this.operator === '**=' && transforms.exponentiation ) {
			this.transpileExponentiation( code, transforms );
		}

		else if ( /Pattern/.test( this.left.type ) && transforms.destructuring ) {
			this.transpileDestructuring( code, transforms );
		}

		super.transpile( code, transforms );
	}

	transpileDestructuring ( code ) {
		const scope = this.findScope( true );
		const value = scope.createIdentifier( 'assign' );
		const temporaries = [value];

		const start = this.start;

		// We need to pick out some elements from the original code,
		// interleaved with generated code. These helpers are used to
		// easily do that while keeping the order of the output
		// predictable.
		let text = '';
		function use ( node ) {
			code.insertRight( node.start, text );
			code.move( node.start, node.end, start );
			text = '';
		}
		function write ( string ) {
			text += string;
		}

		write( `(${value} = ` );
		use( this.right );

		// Walk `pattern`, generating code that assigns the value in
		// `ref` to it. When `mayDuplicate` is false, the function
		// must take care to only output `ref` once.
		function destructure ( pattern, ref, mayDuplicate ) {
			if ( pattern.type === 'Identifier' || pattern.type === 'MemberExpression' ) {
				write( ', ' );
				use( pattern );
				write( ` = ${ref}` );
			}

			else if ( pattern.type === 'AssignmentPattern' ) {
				if ( pattern.left.type === 'Identifier' ) {
					const target = pattern.left.name;
					let source = ref;
					if ( !mayDuplicate ) {
						write( `, ${target} = ${ref}` );
						source = target;
					}
					write( `, ${target} = ${source} === void 0 ? ` );
					use( pattern.right );
					write( ` : ${source}` );
				}
				else {
					const target = scope.createIdentifier( 'temp' );
					let source = ref;
					temporaries.push( target );
					if ( !mayDuplicate ) {
						write( `, ${target} = ${ref}` );
						source = target;
					}
					write( `, ${target} = ${source} === void 0 ? ` );
					use( pattern.right );
					write( ` : ${source}` );
					destructure( pattern.left, target, true );
				}
			}

			else if ( pattern.type === 'ArrayPattern' ) {
				const elements = pattern.elements;
				if ( elements.length === 1 ) {
					destructure( elements[0], `${ref}[0]`, false );
				}
				else {
					if ( !mayDuplicate ) {
						const temp = scope.createIdentifier( 'array' );
						temporaries.push( temp );
						write( `, ${temp} = ${ref}` );
						ref = temp;
					}
					elements.forEach( ( element, i ) => {
						if ( element ) destructure( element, `${ref}[${i}]`, false );
					} );
				}
			}

			else if ( pattern.type === 'ObjectPattern' ) {
				const props = pattern.properties;
				if ( props.length == 1 ) {
					destructure ( props[0].value, `${ref}.${props[0].key.name}`, false );
				}
				else {
					if ( !mayDuplicate ) {
						const temp = scope.createIdentifier( 'obj' );
						temporaries.push( temp );
						write( `, ${temp} = ${ref}` );
						ref = temp;
					}
					props.forEach( prop => {
						destructure( prop.value, `${ref}.${prop.key.name}`, false );
					} );
				}
			}

			else {
				throw new Error( `Unexpected node type in destructuring assignment (${pattern.type})` );
			}
		}
		destructure( this.left, value, true );

		code.insertRight( start, text + ')' );
		code.remove( start, this.right.start );

		const statement = this.findNearest( /(?:Statement|Declaration)$/ );
		code.insertLeft( statement.start, `var ${temporaries.join( ', ' )};\n${statement.getIndentation()}` );
	}

	transpileExponentiation ( code ) {
		const scope = this.findScope( false );
		const getAlias = name => {
			const declaration = scope.findDeclaration( name );
			return declaration ? declaration.name : name;
		};

		// first, the easy part – `**=` -> `=`
		let charIndex = this.left.end;
		while ( code.original[ charIndex ] !== '*' ) charIndex += 1;
		code.remove( charIndex, charIndex + 2 );

		// how we do the next part depends on a number of factors – whether
		// this is a top-level statement, and whether we're updating a
		// simple or complex reference
		let base;

		let left = this.left;
		while ( left.type === 'ParenthesizedExpression' ) left = left.expression;

		if ( left.type === 'Identifier' ) {
			base = getAlias( left.name );
		} else if ( left.type === 'MemberExpression' ) {
			let object;
			let needsObjectVar = false;
			let property;
			let needsPropertyVar = false;

			const statement = this.findNearest( /(?:Statement|Declaration)$/ );
			const i0 = statement.getIndentation();

			if ( left.property.type === 'Identifier' ) {
				property = left.computed ? getAlias( left.property.name ) : left.property.name;
			} else {
				property = scope.createIdentifier( 'property' );
				needsPropertyVar = true;
			}

			if ( left.object.type === 'Identifier' ) {
				object = getAlias( left.object.name );
			} else {
				object = scope.createIdentifier( 'object' );
				needsObjectVar = true;
			}

			if ( left.start === statement.start ) {
				if ( needsObjectVar && needsPropertyVar ) {
					code.insertRight( statement.start, `var ${object} = ` );
					code.overwrite( left.object.end, left.property.start, `;\n${i0}var ${property} = ` );
					code.overwrite( left.property.end, left.end, `;\n${i0}${object}[${property}]` );
				}

				else if ( needsObjectVar ) {
					code.insertRight( statement.start, `var ${object} = ` );
					code.insertLeft( left.object.end, `;\n${i0}` );
					code.insertLeft( left.object.end, object );
				}

				else if ( needsPropertyVar ) {
					code.insertRight( left.property.start, `var ${property} = ` );
					code.insertLeft( left.property.end, `;\n${i0}` );
					code.move( left.property.start, left.property.end, this.start );

					code.insertLeft( left.object.end, `[${property}]` );
					code.remove( left.object.end, left.property.start );
					code.remove( left.property.end, left.end );
				}
			}

			else {
				let declarators = [];
				if ( needsObjectVar ) declarators.push( object );
				if ( needsPropertyVar ) declarators.push( property );
				code.insertRight( statement.start, `var ${declarators.join( ', ' )};\n${i0}` );

				if ( needsObjectVar && needsPropertyVar ) {
					code.insertRight( left.start, `( ${object} = ` );
					code.overwrite( left.object.end, left.property.start, `, ${property} = ` );
					code.overwrite( left.property.end, left.end, `, ${object}[${property}]` );
				}

				else if ( needsObjectVar ) {
					code.insertRight( left.start, `( ${object} = ` );
					code.insertLeft( left.object.end, `, ${object}` );
				}

				else if ( needsPropertyVar ) {
					code.insertRight( left.property.start, `( ${property} = ` );
					code.insertLeft( left.property.end, `, ` );
					code.move( left.property.start, left.property.end, left.start );

					code.overwrite( left.object.end, left.property.start, `[${property}]` );
					code.remove( left.property.end, left.end );
				}

				code.insertLeft( this.end, ` )` );
			}

			base = object + ( left.computed || needsPropertyVar ? `[${property}]` : `.${property}` );
		}

		code.insertRight( this.right.start, `Math.pow( ${base}, ` );
		code.insertLeft( this.right.end, ` )` );
	}
}
