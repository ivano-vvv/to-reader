import React from "react";
import Tag from "../display/common/tag";
import { useDispatch, useSelector } from "react-redux";
import {
  createTagFilter,
  deleteTagFilter,
} from "../../redux/reducers/filterReducer";

export default function TagContainer(props) {
  const tagsInFilter = useSelector((state) => state.filter.tags);
  let isActive = checkIsActive(props.id, tagsInFilter);
  const dispatch = useDispatch();

  return <Tag {...props} onClick={onClick} isActive={isActive} />;

  function onClick(e) {
    e.preventDefault();
    isActive
      ? dispatch(deleteTagFilter(props.id))
      : dispatch(createTagFilter(props.id));
  }

  function checkIsActive(id, tagsInFilter) {
    for (let i = 0; i < tagsInFilter.length; i++) {
      if (tagsInFilter[i].id === id) return true;
    }

    return false;
  }
}
