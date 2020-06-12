import React from "react";
import "./input.css";

export default function Textarea(props) {
  let className = "input input_textarea " + props.className;

  return (
    <textarea
      {...props.input}
      rows={props.rows}
      className={className}
      placeholder={props.placeholder}
    ></textarea>
  );
}
