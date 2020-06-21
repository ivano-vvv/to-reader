import React from "react";
import "./service-button.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  switchFirstListArticleStatus,
  switchReadArticleStatus,
} from "../../../redux/reducers/articleReducer";

export function ServiceButton(props) {
  function classNameConstructor(props) {
    return (
      "service-button" +
      addSpace(props.className) +
      addSpace(`service-button_${props.type}`) +
      (props.isActive
        ? addSpace(`service-button_${props.type}_active`)
        : addSpace(`service-button_${props.type}`))
    );

    function addSpace(str) {
      return " " + str;
    }
  }

  const filter = useSelector((state) => state.filter);
  const dispatch = useDispatch();

  function onFirstListClick(e) {
    e.preventDefault();
    dispatch(switchFirstListArticleStatus(props.id, filter));
  }
  function onReadListClick(e) {
    e.preventDefault();
    dispatch(switchReadArticleStatus(props.id, filter));
  }

  switch (props.type) {
    case "edit":
      return (
        <Link
          to={{ pathname: "/edit", state: { id: props.id } }}
          className={classNameConstructor(props)}
        />
      );
    case "first-list":
      return (
        <button
          className={classNameConstructor(props)}
          onClick={onFirstListClick}
        />
      );
    case "isRead":
      return (
        <button
          className={classNameConstructor(props)}
          onClick={onReadListClick}
        />
      );
    case "edit_preview":
      return <div className={classNameConstructor(props)} />;
    case "first-list_preview":
      return <div className={classNameConstructor(props)} />;
    case "isRead_preview":
      return <div className={classNameConstructor(props)} />;
    default:
      return <div className={classNameConstructor(props)} />;
  }
}
