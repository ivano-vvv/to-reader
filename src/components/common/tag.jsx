import React from "react";
import "./tag.css";

export default function Tag(props) {
  function constructedClassName(props) {
    let colorClassName = addSpace(`tag_${props.colorHex}`),
      positionClassName = addSpace(props.position + "__tag"),
      typeClassName = addSpace("tag-" + props.type);

    return "tag" + colorClassName + positionClassName + typeClassName;

    function addSpace(str) {
      return " " + str;
    }
  }

  if (props.type === "button") {
    return (
      <button className={constructedClassName(props)}>{props.title}</button>
    );
  } else {
    return <span className={constructedClassName(props)}>{props.title}</span>;
  }
}
