import React from "react";
import Tag from "../display/common/tag";
import { useDispatch } from "react-redux";
import { createTagFilter } from "../../redux/reducers/filterReducer";

export default function TagContainer(props) {
  const dispatch = useDispatch();

  function onClick(e) {
    e.preventDefault();
    dispatch(createTagFilter(props.id));
  }

  return <Tag {...props} onClick={onClick} />;
}
