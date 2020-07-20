import React, { Component } from "react";

class Calculator extends Component {
  constructor(props) {
    super(props);

    this.state = {
      input1: "",
      input2: "",
      result: null,
    };
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  displayResult = (event, symbol) => {
    let { input1, input2 } = this.state;
    input1 = Number(input1);
    input2 = Number(input2);
    event.preventDefault();
    if (input1 === "" || input2 === "") {
      alert("your input field is empty");
    } else {
      let output;
      switch (symbol) {
        case "+":
          output = input1 + input2;
          this.setResult(output);
          break;
        case "-":
          output = input1 - input2;
          this.setResult(output);
          break;
        case "*":
          output = input1 * input2;
          this.setResult(output);
          break;
        case "/":
          output = input1 / input2;
          this.setResult(output);
          break;
        default:
          console.log("please enter avalid symbol");
      }
    }
  };

  setResult = (output) => {
    this.setState({
      result: `${output}`,
    });
  };
  render() {
    return (
      <div className="main-container">
        <h1>Calculator</h1>

        <div className="container">
          <form>
            <div className="inputs">
              <label className="labels">
                Input-1
                <input
                  name="input1"
                  type="number"
                  value={this.state.input1}
                  onChange={this.handleInputChange}
                />
              </label>

              <label className="labels">
                Input-2
                <input
                  name="input2"
                  type="number"
                  value={this.state.input2}
                  onChange={this.handleInputChange}
                />
              </label>
            </div>

            <div className="buttons">
              <button
                className="btn-add btn"
                onClick={(event) => this.displayResult(event, "+")}
              >
                +
              </button>
              <button
                className="btn-sub btn"
                onClick={(event) => this.displayResult(event, "-")}
              >
                -
              </button>
              <button
                className="btn-multiply btn"
                onClick={(event) => this.displayResult(event, "*")}
              >
                *
              </button>
              <button
                className="btn-divide btn"
                onClick={(event) => this.displayResult(event, "/")}
              >
                /
              </button>
            </div>
          </form>
          {this.state.result ? (
            <div className="result">
              <h2>The result is: {this.state.result}</h2>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    );
  }
}

export default Calculator;
