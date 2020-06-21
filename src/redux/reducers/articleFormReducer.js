import { getFirstListItemsAmountAPI } from "../../DAL/storageAPI";

const UPDATE_LINK_VALUE = "UPDATE_LINK_VALUE";
const UPDATE_TITLE_VALUE = "UPDATE_TITLE_VALUE";
const UPDATE_DESC_VALUE = "UPDATE_DESC_VALUE";
const UPDATE_COVER_VALUE = "UPDATE_COVER_VALUE";
const UPDATE_FIRST_LIST_CHECK_VALUE = "UPDATE_FIRST_LIST_CHECK_VALUE";
const UPDATE_TAGS_VALUE = "UPDATE_TAGS_VALUE";
export function updateInputValues(name, value) {
  switch (name) {
    case "link":
      return {
        type: UPDATE_LINK_VALUE,
        value,
      };
    case "title":
      return {
        type: UPDATE_TITLE_VALUE,
        value,
      };
    case "desc":
      return {
        type: UPDATE_DESC_VALUE,
        value,
      };
    case "cover":
      return {
        type: UPDATE_COVER_VALUE,
        value,
      };
    case "firstListCheck":
      return {
        type: UPDATE_FIRST_LIST_CHECK_VALUE,
        value,
      };
    case "tags":
      return {
        type: UPDATE_TAGS_VALUE,
        value,
      };
    default:
      break;
  }
}

const CLEAR_FORM = "CLEAR_FORM";
export function clearForm() {
  return {
    type: CLEAR_FORM,
  };
}

const SET_LINK_ERROR_STATUS = "SET_LINK_ERROR_STATUS";
export function setLinkErrorStatus(isError) {
  return {
    type: SET_LINK_ERROR_STATUS,
    isError,
  };
}

const SET_TITLE_EMPTY_ERROR_STATUS = "SET_TITLE_EMPTY_ERROR_STATUS";
export function setTitleEmptyErrorStatus(isError) {
  return {
    type: SET_TITLE_EMPTY_ERROR_STATUS,
    isError,
  };
}

const SET_TITLE_LENGTH_ERROR_STATUS = "SET_TITLE_LENGTH_ERROR_STATUS";
export function setTitleLengthErrorStatus(isError) {
  return {
    type: SET_TITLE_LENGTH_ERROR_STATUS,
    isError,
  };
}

const SET_DESC_LENGTH_ERROR_STATUS = "SET_DESC_LENGTH_ERROR_STATUS";
export function setDescLengthErrorStatus(isError) {
  return {
    type: SET_DESC_LENGTH_ERROR_STATUS,
    isError,
  };
}

const UPDATE_PREVIEW_COVER = "UPDATE_PREVIEW_COVER";
export function updatePreviewCover() {
  return {
    type: UPDATE_PREVIEW_COVER,
  };
}

let initialState = {
  values: {
    link: "",
    title: "",
    desc: "",
    cover: "",
    firstListCheck: false,
    tags: "",
  },
  touchedErrors: {
    link_isEmpty: false,
    title_isEmpty: false,
  },
  onChangeErrors: {
    title_maxLength: false,
    firstList_maxItems: false,
    desc_maxLength: false,
    tags_maxLength: false,
  },
  coverForPreview: "",
};

export default function articleFormReducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_LINK_VALUE:
      let newLinkValue = action.value;

      if (
        !newLinkValue.startsWith("http://") &&
        !newLinkValue.startsWith("https://") &&
        newLinkValue !== ""
      ) {
        newLinkValue = "https://" + newLinkValue;
      }

      return {
        ...state,
        values: { ...state.values, link: newLinkValue },
      };
    case UPDATE_TITLE_VALUE:
      return {
        ...state,
        values: { ...state.values, title: action.value },
      };
    case UPDATE_DESC_VALUE:
      return {
        ...state,
        values: { ...state.values, desc: action.value },
      };
    case UPDATE_COVER_VALUE:
      let newCoverValue = action.value;

      if (
        !newCoverValue.startsWith("http://") &&
        !newCoverValue.startsWith("https://") &&
        newCoverValue !== ""
      ) {
        newCoverValue = "https://" + newCoverValue;
      }
      return {
        ...state,
        values: { ...state.values, cover: newCoverValue },
      };
    case UPDATE_FIRST_LIST_CHECK_VALUE:
      if (getFirstListItemsAmountAPI() >= 6 && action.value) {
        return {
          ...state,
          onChangeErrors: {
            ...state.onChangeErrors,
            firstList_maxItems: true,
          },
        };
      }
      return {
        ...state,
        values: { ...state.values, firstListCheck: action.value },
      };
    case UPDATE_TAGS_VALUE:
      if (
        action.value[action.value.length - 1] === "," ||
        action.value === " " ||
        action.value === ""
      ) {
        return {
          ...state,
          values: { ...state.values, tags: action.value },
        };
      } else if (
        action.value[action.value.length - 1] === " " &&
        action.value[action.value.length - 2] === " "
      ) {
        return state;
      } else if (action.value[action.value.length - 1] === " ") {
        return {
          ...state,
          values: { ...state.values, tags: action.value },
        };
      } else {
        let updateTagsValue = action.value.replace(", ", ",");
        updateTagsValue = updateTagsValue
          .split(",")
          .map((t) => t.trim())
          .map((t) => Uppercase(t))
          .join(", ");
        return {
          ...state,
          values: { ...state.values, tags: updateTagsValue },
        };
      }

    case CLEAR_FORM:
      return initialState;
    case SET_LINK_ERROR_STATUS:
      return {
        ...state,
        touchedErrors: { ...state.touchedErrors, link_isEmpty: action.isError },
      };
    case SET_TITLE_EMPTY_ERROR_STATUS:
      return {
        ...state,
        touchedErrors: {
          ...state.touchedErrors,
          title_isEmpty: action.isError,
        },
      };
    case SET_TITLE_LENGTH_ERROR_STATUS:
      return {
        ...state,
        onChangeErrors: {
          ...state.onChangeErrors,
          title_maxLength: action.isError,
        },
      };
    case SET_DESC_LENGTH_ERROR_STATUS:
      return {
        ...state,
        onChangeErrors: {
          ...state.onChangeErrors,
          desc_maxLength: action.isError,
        },
      };
    case UPDATE_PREVIEW_COVER:
      return {
        ...state,
        coverForPreview: state.values.cover,
      };
    default:
      return state;
  }

  function Uppercase(str) {
    return str[0].toUpperCase() + str.slice(1);
  }
}
