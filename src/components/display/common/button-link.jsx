import React from "react";
import "./button-link.css";

export default function ButtonLink(props) {
  return props.isActive ? (
    <span className={"button-link button-link_active " + props.className}>
      {props.value || props.children}
    </span>
  ) : (
    <button
      onClick={props.onClick}
      className={"button-link " + props.className}
    >
      {props.value || props.children}
    </button>
  );
}
