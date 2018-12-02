import React, { Component, Fragment } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.counter.value
    };
  }

  render() {
    return (
      <Fragment>
        {this.props.children}
        <span className={this.formatBadge()}>{this.formatCount()}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <div
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </div>
      </Fragment>
    );
  }

  formatBadge() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
