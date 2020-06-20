import React from "react";
import AddArticleForm from "../display/add-article-form";
import { reduxForm, reset } from "redux-form";
import { useDispatch, useSelector } from "react-redux";
import { saveArticle } from "../../redux/reducers/articleReducer";

export default function AddArticleFormContainer(props) {
  const dispatch = useDispatch();
  

  const AddArticleReduxForm = reduxForm({
    form: "adding",
  })(AddArticleForm);

  function onSubmit(values) {
    dispatch(saveArticle(values))
    dispatch(reset("adding"));
  }

  return <AddArticleReduxForm onSubmit={onSubmit} />;
}
