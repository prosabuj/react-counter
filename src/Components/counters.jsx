import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    const {
      onReset,
      counters,
      onDelete,
      onIncrement,
      onDecrement
    } = this.props;
    return (
      <div>
        <div onClick={onReset} className="button btn btn-primary btn-md m-2">
          Reset
        </div>
        {counters.map(counter => (
          <Counter
            key={counter.id}
            onDelete={onDelete}
            onIncrement={onIncrement}
            onDecrement={onDecrement}
            counter={counter}
          >
            <h4>Counter #{counter.id}</h4>
          </Counter>
        ))}
      </div>
    );
  }
}

export default Counters;
