import React, { Component } from 'react';
import Inspector from 'react-inspector';
import style from './style';

class ActionLogger extends Component {
  componentDidUpdate() {
    const latest = this.refs.latest;
    if (latest) {
      const borderLeft = style.action.borderLeft;
      latest.style.borderLeft = 'solid 5px #aaa';
      setTimeout(() => {
        latest.style.borderLeft = borderLeft;
      }, 300);
    }
  }

  renderAction(action, i) {
    const ref = i ? '' : 'latest';
    const counter = (
      <div style={style.counter}>{action.count}</div>
    );
    return (
      <div ref={ref} key={action.id} style={style.action}>
        <div style={style.countwrap}>
          {action.count > 1 && counter}
        </div>
        <div style={style.inspector}>
          <Inspector
            showNonenumerable
            name={action.data.name}
            data={action.data.args || action.data}
          />
        </div>
      </div>
    );
  }

  getActionData() {
    return this.props.actions.map((action, i) => {
      return this.renderAction(action, i);
    });
  }

  render() {
    return (
      <div style={style.wrapper}>
        <pre style={style.actions}>{this.getActionData()}</pre>
        <button style={style.button} onClick={this.props.onClear}>CLEAR</button>
      </div>
    );
  }
}

ActionLogger.propTypes = {
  onClear: React.PropTypes.func,
  actions: React.PropTypes.array,
};

export default ActionLogger;
