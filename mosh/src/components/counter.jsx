import React, { Component } from "react";

class Counter extends Component {
  state = {
    tags: ["tag 1", "tag 2", "tag 3"],
  };

  // style = {
  //   color: "green",
  //   padding: "1rem",
  //   textAlign: "center",
  // };
  // renderTags() {
  //   return (
  //     <ul>
  //       {this.state.tags.map((tag) => (
  //         <li key={tag}> {tag}</li>
  //       ))}
  //     </ul>
  //   );
  // }

  render() {
    const { counterProps, onDecrement, onIncrement, onDelete } = this.props;
    return (
      <div className="">
        {/* <h1 style={this.style} className="card m-3">
          Counter App
        </h1> */}
        <span style={{ padding: "1rem" }} className={this.getCountClasses()}>
          {this.formatCount()}
        </span>

        <button
          className="btn btn-primary"
          onClick={() => onIncrement(counterProps)}
        >
          increment
        </button>
        <button
          className="btn btn-warning m-2"
          onClick={() => onDecrement(counterProps)}
        >
          Decrement
        </button>
        <button
          className="btn btn-danger btn-small"
          onClick={() => onDelete(counterProps.id)}
        >
          Delete
        </button>
        {/* {this.state.tags.length == 0 && "Please create a tag"}
        {this.renderTags()} */}
      </div>
    );
  }
  formatCount() {
    let { value: count } = this.props.counterProps;
    return count === 0 ? (
      <span className="text-danger fw-bold fs-5 text-decoration-underline">
        Zero
      </span>
    ) : (
      count
    );
  }

  getCountClasses() {
    let classes = "m-2 badge bg-";
    classes += this.props.counterProps.value % 2 === 0 ? "info" : "primary";
    return classes;
  }
}

export default Counter;
