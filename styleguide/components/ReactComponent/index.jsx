import { Component, PropTypes } from 'react';

const ReactComponentRenderer = ({ name, pathLine, description, props, examples, sidebar }) => {
	return (
		<div className="rk-component__root" id={name}>
			<div className="meta">
				<header className="rk-component__header">
					<a className="anchor" href={'#' + name}>
						<h2 className="rk-component___heading">{name}</h2>
					</a>
					<p className="pathLine">
						{sidebar ? (
							<a className="isolatedLink" href={'#!/' + name} title="Open isolated">⇢</a>
						) : (
							<a  href="/" title="Back" className="">← back</a>
						)}
					</p>
					<div className="rk-component__description">
						{description}
					</div>
				</header>
				<div className="rk-component__props">
					{props}
				</div>
			</div>
			<div className="rk-component__examples">
				{examples}
			</div>
		</div>
	);
};

ReactComponentRenderer.propTypes = {
	name: PropTypes.string.isRequired,
	pathLine: PropTypes.string.isRequired,
	description: PropTypes.node,
	props: PropTypes.node,
	examples: PropTypes.node,
	sidebar: PropTypes.bool,
};


export default ReactComponentRenderer;
