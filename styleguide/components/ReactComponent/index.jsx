import { Component, PropTypes } from 'react';

const ReactComponentRenderer = ({ name, description, props, examples, sidebar }) => {
    return (
        <div className="rk-component__root" id={name}>
            <div className="meta">
                <header className="rk-component__header">
                    <h2 className="h2">{name}</h2>
                    <div className="rk-component__description">
                        {description}
                    </div>
                </header>
                <div className="rk-component__props">
                  <h3 className="h3">Props</h3>
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
