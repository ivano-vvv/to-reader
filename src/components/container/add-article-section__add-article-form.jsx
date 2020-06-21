import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { saveArticle } from "../../redux/reducers/articleReducer";
import ArticleForm from "../display/common/article-form";
import {
  updateInputValues,
  clearForm,
  setLinkErrorStatus,
  setTitleEmptyErrorStatus,
  setTitleLengthErrorStatus,
  setDescLengthErrorStatus,
  updatePreviewCover,
} from "../../redux/reducers/articleFormReducer";

export default function AddArticleFormContainer(props) {
  const dispatch = useDispatch();
  const values = useSelector((state) => state.articleForm.values);
  const touchedErrors = useSelector((state) => state.articleForm.touchedErrors);
  const onChangeErrors = useSelector(
    (state) => state.articleForm.onChangeErrors
  );
  const preview = useSelector((state) => state.articleForm.coverForPreview);

  function onChange(e) {
    switch (e.target.name) {
      case "firstListCheck":
        dispatch(updateInputValues(e.target.name, e.target.checked));
        break;
      case "link":
        dispatch(setLinkErrorStatus(false));
        dispatch(updateInputValues(e.target.name, e.target.value));
        break;
      case "title":
        dispatch(setTitleLengthErrorStatus(false));
        dispatch(setTitleEmptyErrorStatus(false));
        if (e.target.value.length >= 80) {
          dispatch(
            updateInputValues(e.target.name, e.target.value.slice(0, 80))
          );
          dispatch(setTitleLengthErrorStatus(true));
        } else {
          dispatch(updateInputValues(e.target.name, e.target.value));
        }
        break;
      case "desc":
        dispatch(setDescLengthErrorStatus(false));
        if (e.target.value.length >= 280) {
          dispatch(
            updateInputValues(e.target.name, e.target.value.slice(0, 280))
          );
          dispatch(setDescLengthErrorStatus(true));
        } else {
          dispatch(updateInputValues(e.target.name, e.target.value));
        }
        break;
      case "tags":
        let tags_tagList = e.target.value.split(",").map((t) => t.trim());
        tags_tagList[tags_tagList.length - 1].length === 16
          ? dispatch(updateInputValues(e.target.name, e.target.value + ", "))
          : dispatch(updateInputValues(e.target.name, e.target.value));
        break;
      default:
        dispatch(updateInputValues(e.target.name, e.target.value));
        break;
    }
  }

  function onBlur(e) {
    switch (e.target.name) {
      case "link":
        if (values.link.trim() === "" || values.link === "https://") {
          dispatch(setLinkErrorStatus(true));
        } else {
          dispatch(setLinkErrorStatus(false));
        }
        break;
      case "title":
        dispatch(setTitleLengthErrorStatus(false));
        if (values.title.trim() === "") {
          dispatch(updateInputValues(e.target.name, ""));
          dispatch(setTitleEmptyErrorStatus(true));
        } else {
          dispatch(setTitleEmptyErrorStatus(false));
        }
        break;
      case "desc":
        dispatch(setDescLengthErrorStatus(false));
        break;
      case "cover":
        dispatch(updatePreviewCover());
      default:
        break;
    }
    console.log(e.target);
  }

  function onSubmit(e) {
    e.preventDefault();
    dispatch(saveArticle(values));
    dispatch(clearForm());
  }

  return (
    <ArticleForm
      onSubmit={onSubmit}
      onChange={onChange}
      values={values}
      touchedErrors={touchedErrors}
      onChangeErrors={onChangeErrors}
      onBlur={onBlur}
      preview={preview}
    />
  );
}
