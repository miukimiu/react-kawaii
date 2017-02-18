import Node from '../Node.js';

export default class TemplateElement extends Node {
	initialise () {
		this.program.templateElements.push( this );
	}
}
