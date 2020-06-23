import {
  updateInputValues,
  setLinkErrorStatus,
  setTitleEmptyErrorStatus,
  setTitleLengthErrorStatus,
  setDescLengthErrorStatus,
  switchTagLengthErrorStatus,
  switchFirstListAmountError,
} from "../redux/reducers/articleFormReducer";
import { getFirstListItemsAmountAPI } from "../DAL/storageAPI";

export function updateLinkValue(value) {
  return (dispatch) => {
    dispatch(setLinkErrorStatus(false));
    dispatch(updateInputValues("link", normalizeValue(value)));
  };

  function normalizeValue(value) {
    let newLinkValue = value;

    if (
      !newLinkValue.startsWith("http://") &&
      !newLinkValue.startsWith("https://") &&
      newLinkValue !== ""
    ) {
      newLinkValue = "https://" + newLinkValue;
    }

    return newLinkValue;
  }
}

export function updateTitleValue(value) {
  return (dispatch) => {
    dispatch(setTitleLengthErrorStatus(false));
    dispatch(setTitleEmptyErrorStatus(false));
    if (value.length >= 80) {
      dispatch(updateInputValues("title", value.slice(0, 80)));
      dispatch(setTitleLengthErrorStatus(true));
    } else {
      dispatch(updateInputValues("title", value));
    }
  };
}

export function updateDescValue(value) {
  return (dispatch) => {
    dispatch(setDescLengthErrorStatus(false));
    if (value.length >= 280) {
      dispatch(updateInputValues("desc", value.slice(0, 280)));
      dispatch(setDescLengthErrorStatus(true));
    } else {
      dispatch(updateInputValues("desc", value));
    }
  };
}

export function updateCoverLinkValue(value) {
  return (dispatch) => {
    dispatch(updateInputValues("cover", normalizeValue(value)));
  };

  function normalizeValue(value) {
    let newCoverValue = value;

    if (
      !newCoverValue.startsWith("http://") &&
      !newCoverValue.startsWith("https://") &&
      newCoverValue !== ""
    ) {
      newCoverValue = "https://" + newCoverValue;
    }

    return newCoverValue;
  }
}

export function updateTagsInputValue(value) {
  return (dispatch) => {
    let tags_tagList = value.split(",").map((t) => t.trim());
    if (tags_tagList[tags_tagList.length - 1].length === 16) {
      dispatch(updateInputValues("tags", normalizeValue(value + ", ")));
      dispatch(switchTagLengthErrorStatus());
      setTimeout(dispatch, 2000, switchTagLengthErrorStatus());
    } else {
      dispatch(updateInputValues("tags", normalizeValue(value)));
    }
  };

  function normalizeValue(value) {
    if (value[value.length - 1] === "," || value === " " || value === "") {
      return value;
    } else if (
      value[value.length - 1] === " " &&
      value[value.length - 2] === " "
    ) {
      return null;
    } else if (value[value.length - 1] === " ") {
      return value;
    } else {
      let updateTagsValue = value.replace(", ", ",");
      return updateTagsValue
        .split(",")
        .map((t) => t.trim())
        .map((t) => Uppercase(t))
        .join(", ");
    }

    function Uppercase(str) {
      return str[0].toUpperCase() + str.slice(1);
    }
  }
}

export function updateFirstListCheck(checked) {
  if (getFirstListItemsAmountAPI() >= 6 && checked) {
    return (dispatch) => {
      dispatch(switchFirstListAmountError());
    };
  }
  return (dispatch) => {
    dispatch(updateInputValues("firstListCheck", checked));
  };
}
