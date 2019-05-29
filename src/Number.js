import React, { Component } from "react";

import "./Number.css";

class Number extends Component {
  constructor(props) {
    super(props);
    this.state = { num: 1 };
    this.randNum = this.randNum.bind(this);
  }

  randNum() {
    this.setState({ num: Math.floor(Math.random() * 10 + 1) });
  }

  render() {
    return (
      <div>
        <h1>Number is : {this.state.num}</h1>
        {this.state.num === 7 ? (
          <h1 className="Number-winner"> "You are Winner!!!!"</h1>
        ) : (
          <button className="Number-button" onClick={this.randNum}>
            <h1> {"Random Number"} </h1>
          </button>
        )}
      </div>
    );
  }
}

export default Number;
