import React from "react";
import TagRow from "../display/tag-row";
import { useDispatch, useSelector } from "react-redux";
import { getSavedTags } from "../../redux/reducers/tagsReducer";

export default function TagRowContainer(props) {
  const dispatch = useDispatch();

  dispatch(getSavedTags());

  let tags = useSelector((state) => state.tags.tags);

  if (tags.length !== 0) {
    return <TagRow tags={tags} />;
  } else {
    return false;
  }
}
