import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteArticle,
  updateArticle,
} from "../../redux/reducers/articleReducer";
import ArticleForm from "../display/common/article-form";
import {
  updateInputValues,
  updatePreviewCover,
  clearForm,
} from "../../redux/reducers/articleFormReducer";
import {
  updateFirstListCheck,
  updateLinkValue,
  updateTitleValue,
  updateDescValue,
  updateTagsInputValue,
  updateCoverLinkValue,
} from "../../form-process/articleFormOnChange";
import {
  onLinkInputBlur,
  onTitleInputBlur,
  onDescInputBlur,
} from "../../form-process/articleFormOnBlur";
import { useHistory } from "react-router-dom";

export default function EditArticleFormContainer(props) {
  const history = useHistory();
  const dispatch = useDispatch();
  const values = useSelector((state) => state.articleForm.values);
  const touchedErrors = useSelector((state) => state.articleForm.touchedErrors);
  const onChangeErrors = useSelector(
    (state) => state.articleForm.onChangeErrors
  );
  const preview = useSelector((state) => state.articleForm.coverForPreview);

  function onChange(e) {
    switch (e.target.name) {
      case "link":
        dispatch(updateLinkValue(e.target.value));
        break;
      case "title":
        dispatch(updateTitleValue(e.target.value));
        break;
      case "desc":
        dispatch(updateDescValue(e.target.value));
        break;
      case "tags":
        dispatch(updateTagsInputValue(e.target.value));
        break;
      case "firstListCheck":
        dispatch(updateFirstListCheck(e.target.checked));
        break;
      case "link":
        dispatch(updateCoverLinkValue(e.target.value));
        break;
      default:
        dispatch(updateInputValues(e.target.name, e.target.value));
        break;
    }
  }

  function onBlur(e) {
    switch (e.target.name) {
      case "link":
        dispatch(onLinkInputBlur(values));
        break;
      case "title":
        dispatch(onTitleInputBlur(values));
        break;
      case "desc":
        dispatch(onDescInputBlur());
        break;
      case "cover":
        dispatch(updatePreviewCover());
      default:
        break;
    }
  }

  function handleDelete(e) {
    e.preventDefault();
    dispatch(deleteArticle(props.id));
    returnToHome();
    dispatch(clearForm());
  }

  function onSubmit(e) {
    e.preventDefault();
    dispatch(updateArticle(props.id, values));
    returnToHome();
    dispatch(clearForm());
  }

  return (
    <ArticleForm
      onDeleteClick={handleDelete}
      onChange={onChange}
      onSubmit={onSubmit}
      values={values}
      touchedErrors={touchedErrors}
      onChangeErrors={onChangeErrors}
      onBlur={onBlur}
      preview={preview}
      type="edit"
    />
  );

  function returnToHome() {
    history.push("/home");
  }
}
