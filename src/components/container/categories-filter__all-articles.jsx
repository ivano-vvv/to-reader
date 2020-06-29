import React from "react";
import ButtonLink from "../display/common/button-link";
import {
  switchOnFirstList,
  clearFilter,
} from "../../redux/reducers/filterReducer";
import { useDispatch, useSelector } from "react-redux";

export default function AllArticlesSwitcherContainer(props) {
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.filter);

  function onClick(e) {
    e.preventDefault();
    dispatch(clearFilter());
  }

  function isFilterActive(filter) {
    if (
      filter.tags.length === 0 &&
      !filter.isFirstList &&
      !filter.isReadList &&
      !filter.isUnreadList
    ) {
      return false;
    }

    return true;
  }

  return (
    <ButtonLink
      onClick={onClick}
      className={props.className}
      isActive={!isFilterActive(filter)}
    >
      {props.value}
    </ButtonLink>
  );
}
