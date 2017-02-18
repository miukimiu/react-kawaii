var React = require('react');

/**
 * React component to render collection of items separated by space or other separator.
 */
function Group(props) {
	// Accept multiple children, one child or none
	var children = props.children ?
		(Array.isArray(props.children) ? props.children : [props.children])
		: []
	;

	// Skip falsy children
	children = children.filter(function(child) {
		return !!child;
	});

	// Insert separators
	var items = children;
	var separator = props.separator;
	var separatorIsElement = React.isValidElement(separator);
	if (children.length > 1) {
		items = [children.shift()];
		children.forEach(function(item, index) {
			if (separatorIsElement) {
				var key = 'separator-' + (item.key || index);
				separator = React.cloneElement(separator, { key: key });
			}
			return items.push(separator, item);
		});
	}

	return React.createElement(props.inline ? 'span' : 'div', { className: props.className }, items);
};

Group.propTypes = {
	/** Items. */
	children: React.PropTypes.node,
	/** Wrap in `<span>` instead of `<div>`. */
	inline: React.PropTypes.bool,
	/** Custom separator (space by default). */
	separator: React.PropTypes.node,
	/** Custom class name. */
	className: React.PropTypes.string,
};
Group.defaultProps = {
	separator: ' ',
};

module.exports = Group;
