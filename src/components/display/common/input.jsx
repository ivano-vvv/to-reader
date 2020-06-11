import React from "react";
import "./input.css";

export default function Input(props) {
  let className = "input " + props.className;

  return (
    <input
      {...props.input}
      type="text"
      placeholder={props.placeholder}
      className={className}
    ></input>
  );
}
