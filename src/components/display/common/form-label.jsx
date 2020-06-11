import React from "react";
import './form-label.css'

export default function FormLabel(props) {
    let className = 'form-label ' + props.className;
  
    return (
    <label
      htmlFor={props.htmlFor}
      className={className}
    >
      {props.text}
    </label>
  );
}
