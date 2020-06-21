import React from "react";
import "./input.css";

export default function Input(props) {
  let className =
    "input " + props.className + ' ' + (props.error ? "input_error" : "");

  return <input {...props} type="text" className={className}></input>;
}
