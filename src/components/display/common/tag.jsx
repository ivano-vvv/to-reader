import React from "react";
import "./tag.css";

export default function Tag(props) {
  if (!props.value) return <div />;

  if (props.type === "button") {
    return (
      <button className={constructedClassName(props)} onClick={props.onClick}>
        {props.value}
      </button>
    );
  } else {
    return <span className={constructedClassName(props)}>{props.value}</span>;
  }

  function constructedClassName(props) {
    let colorClassName = addSpace(`tag_${props.color}`),
      positionClassName = addSpace(props.position + "__tag"),
      typeClassName = addSpace("tag-" + props.type),
      isActiveClassName = addSpace(props.isActive ? `${colorClassName}_active-filter tag_active-filter` : "");

    return (
      "tag" +
      colorClassName +
      positionClassName +
      typeClassName +
      isActiveClassName
    );

    function addSpace(str) {
      return " " + str;
    }
  }
}
