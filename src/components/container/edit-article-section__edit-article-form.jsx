import React from "react";
import EditArticleForm from "../display/edit-article-form";
import { useDispatch } from "react-redux";
import { deleteArticle } from "../../redux/reducers/articleReducer";
import { reduxForm } from "redux-form";
import { createTags } from "../../redux/reducers/tagsReducer";

export default function EditArticleFormContainer(props) {
  const dispatch = useDispatch();

  function handleDelete() {
    dispatch(deleteArticle(props.id));
  }

  function onSubmit(values) {
    dispatch(createTags(props.id, values.tags));
  }

  const EditArticleReduxForm = reduxForm({
    form: "editing",
  })(EditArticleForm);

  return <EditArticleReduxForm onDeleteClick={handleDelete} onSubmit={onSubmit} />;
}