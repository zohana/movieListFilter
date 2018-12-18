import React, { Component } from "react";
import LikeButton from "./likeButton";

class Counter extends Component {
  styles = { fontSize: 10, fontWeight: "bold" };

  componentDidUpdate(prevProps, prevState) {
    //update if the value of prev props is changed and make calls accordingly
    console.log("Previous Props ", prevProps);
    console.log("Previous State ", prevState);

    if (prevProps.counter.value !== this.props.counter.value) {
      // ajax call and get something from the server
    }
  }

  componentWillUnmount() {
    console.log("Counter - Unmount");
  }

  getCounterNumber() {
    const { value } = this.props.counter;
    return value === 0 ? "zero" : value;
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  getDecrementButtonClass() {
    let classes = "btn btn-secondary btn-sm";
    classes += this.props.counter.value < 0 ? " disabled" : " ";
    return classes;
  }

  render() {
    console.log("Counter - Rendered");

    return (
      <React.Fragment>
        {/* when divs are not really required 
        <h5>Title #{this.props.counter.id}</h5>*/}

        <div className="row">
          <div className="col-6 row">
            <div className="col-3">
              <span style={this.styles} className={this.getBadgeClasses()}>
                {this.getCounterNumber()}
              </span>
            </div>
            <div className="col-2">
              <button
                onClick={() => this.props.onIncrement(this.props.counter)}
                className="btn btn-secondary btn-sm"
              >
                +
              </button>
            </div>
            <div className="col-2">
              <button
                onClick={() => this.props.onDecrement(this.props.counter)}
                className={this.getDecrementButtonClass()}
              >
                -
              </button>
            </div>
            <div className="col-2">
              <LikeButton />
            </div>

            <div className="col-3">
              <button
                className="btn btn-danger btn-sm"
                onClick={() => this.props.onDelete(this.props.counter.id)}
              >
                X
              </button>
            </div>
          </div>
          <div className="col-6" />
        </div>
        <br />
      </React.Fragment>
    );
  }
}

export default Counter;
