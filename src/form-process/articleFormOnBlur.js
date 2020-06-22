import {
  updateInputValues,
  setLinkErrorStatus,
  setTitleEmptyErrorStatus,
  setTitleLengthErrorStatus,
  setDescLengthErrorStatus,
  switchTagLengthErrorStatus,
} from "../redux/reducers/articleFormReducer";

export function onLinkInputBlur(values) {
  return (dispatch) => {
    if (values.link.trim() === "" || values.link === "https://") {
      dispatch(setLinkErrorStatus(true));
    } else {
      dispatch(setLinkErrorStatus(false));
    }
  };
}

export function onTitleInputBlur(values) {
  return (dispatch) => {
    dispatch(setTitleLengthErrorStatus(false));
    if (values.title.trim() === "") {
      dispatch(updateInputValues("title", ""));
      dispatch(setTitleEmptyErrorStatus(true));
    } else {
      dispatch(setTitleEmptyErrorStatus(false));
    }
  };
}

export function onDescInputBlur() {
  return (dispatch) => {
    dispatch(setDescLengthErrorStatus(false));
  };
}
