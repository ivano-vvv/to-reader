import React from "react";
import "./button.css";

export default function Button(props) {
  function classNameConstructor(props) {
    return (
      "button" + addSpace(props.className) + addSpace(`button_${props.type}`)
    );

    function addSpace(str) {
      return " " + str;
    }
  }

  return (
    <button
      onClick={props.onClick}
      className={classNameConstructor(props)}
      href={props.link}
    >
      {props.value}
    </button>
  );
}
