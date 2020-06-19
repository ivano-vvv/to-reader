import React from "react";
import ButtonLink from "../display/common/button-link";
import { switchOnReadList } from "../../redux/reducers/filterReducer";
import { useDispatch, useSelector } from "react-redux";

export default function ReadListSwitcherContainer(props) {
  const dispatch = useDispatch();
  const isReadList = useSelector((state) => state.filter.isReadList);

  function onClick(e) {
    e.preventDefault();
    if (!isReadList) dispatch(switchOnReadList());
  }

  return (
    <ButtonLink
      onClick={onClick}
      className={props.className}
      isActive={isReadList}
    >
      {props.value}
    </ButtonLink>
  );
}
