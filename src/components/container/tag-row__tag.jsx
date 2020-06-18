import React from "react";
import Tag from "../display/common/tag";
import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  createTagFilter,
  deleteTagFilter,
} from "../../redux/reducers/filterReducer";

export default function TagContainer(props) {
  const [isActive, switchActive] = useState(false);

  const dispatch = useDispatch();

  function onClick(e) {
    e.preventDefault();
    isActive
      ? dispatch(deleteTagFilter(props.id))
      : dispatch(createTagFilter(props.id));
    switchActive(!isActive);
  }

  return <Tag {...props} onClick={onClick} isActive={isActive} />;
}
