import React from "react";
import ButtonLink from "../display/common/button-link";
import { switchOnUnreadList } from "../../redux/reducers/filterReducer";
import { useDispatch, useSelector } from "react-redux";

export default function UnreadListSwitcherContainer(props) {
  const dispatch = useDispatch();
  const isUnreadList = useSelector((state) => state.filter.isUnreadList);

  function onClick(e) {
    e.preventDefault();
    if (!isUnreadList) dispatch(switchOnUnreadList());
  }

  return (
    <ButtonLink
      onClick={onClick}
      className={props.className}
      isActive={isUnreadList}
    >
      {props.value}
    </ButtonLink>
  );
}
