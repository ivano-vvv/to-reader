import React from "react";
import EditArticleForm from "../display/edit-article-form";
import { useDispatch } from "react-redux";
import { deleteArticle } from "../../redux/reducers/articleReducer";

export default function EditArticleFormContainer(props) {
  const dispatch = useDispatch();

  function handleDelete() {
    dispatch(deleteArticle(props.id));
  }

  return <EditArticleForm onDeleteClick={handleDelete} />;
}
