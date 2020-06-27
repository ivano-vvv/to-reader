import React from "react";
import EditPage from "../display/edit-page";
import { Redirect } from "react-router-dom";
import { getArticleDataAPI, getTagNameByIdAPI } from "../../DAL/storageAPI";
import { useDispatch } from "react-redux";
import { setArticleDataForEdit } from "../../redux/reducers/articleFormReducer";

export default function EditPageContainer(props) {
  const dispatch = useDispatch();

  if (!props.location.state || !props.location.state.id) {
    return <Redirect to="/home" />;
  }

  let articleData = getArticleDataAPI(props.location.state.id);
  dispatch(setArticleDataForEdit(prepareDataForForm(articleData)));

  return <EditPage id={props.location.state.id} />;

  function prepareDataForForm(data) {
    if (!data.tags) return data;

    return {
      ...data,
      tags: data.tags.map((t) => getTagNameByIdAPI(t)).join(", "),
    };
  }
}
