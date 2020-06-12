import React from "react";
import "./tag.css";

export default function Tag(props) {
  function constructedClassName(props) {
    let colorClassName = addSpace(`tag_${props.color}`),
      positionClassName = addSpace(props.position + "__tag"),
      typeClassName = addSpace("tag-" + props.type);

    return "tag" + colorClassName + positionClassName + typeClassName;

    function addSpace(str) {
      return " " + str;
    }
  }

  if (props.type === "button") {
    return (
      <button className={constructedClassName(props)}>{props.value}</button>
    );
  } else {
    return <span className={constructedClassName(props)}>{props.value}</span>;
  }
}
