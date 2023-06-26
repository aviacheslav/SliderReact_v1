import React from 'react';

class Counter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  add = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  subtract = () => {
    this.setState({
      count: this.state.count - 1,
    });
  };

  render() {
    const { count } = this.state;

    return (
      <>
        <p>Count is {count}</p>
        <button onClick={this.add}>Add</button>
        <button onClick={this.subtract}>Subtract</button>
      </>
    );
  }
}

export default Counter;
