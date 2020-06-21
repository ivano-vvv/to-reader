import React from "react";
import "./input.css";

export default function Textarea(props) {
  let className =
    "input input_textarea " +
    props.className +
    " " +
    (props.error ? "input_error" : "");

  return <textarea {...props} className={className}></textarea>;
}
