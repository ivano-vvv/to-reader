import React from "react";
import ButtonLink from "../display/common/button-link";
import { switchOnFirstList } from "../../redux/reducers/filterReducer";
import { useDispatch, useSelector } from "react-redux";

export default function FirstListSwitcherContainer(props) {
  const dispatch = useDispatch();
  const isFirstList = useSelector((state) => state.filter.isFirstList);

  function onClick(e) {
    e.preventDefault();
    if (!isFirstList) dispatch(switchOnFirstList());
  }

  return (
    <ButtonLink
      onClick={onClick}
      className={props.className}
      isActive={isFirstList}
    >
      {props.value}
    </ButtonLink>
  );
}
