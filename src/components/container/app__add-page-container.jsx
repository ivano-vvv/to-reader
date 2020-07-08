import React from "react";
import AddingArticle from "../display/adding-article";
import { useDispatch } from "react-redux";
import { clearForm } from "../../redux/reducers/articleFormReducer";

export default function AddPageContainer(props) {
  const dispatch = useDispatch();

  dispatch(clearForm());

  return <AddingArticle {...props} />;
}
