import React from "react";
import "./service-button.css";
import { Link } from "react-router-dom";

export function ServiceButton(props) {
  let className =
    "service-button " + props.className + " service-button_" + props.type;

    switch (props.type) {
    case "edit":
      return (
        <Link
          to={{ pathname: "/edit", state: { id: props.id } }}
          className={className}
        />
      );
    default:
      return <div className={className} />;
  }
}
