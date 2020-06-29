import { getSavedTagsAPI } from "../../DAL/storageAPI";

const GET_SAVED_TAGS = "GET_SAVED_TAGS";
export function getSavedTags() {
  return {
    type: GET_SAVED_TAGS,
  };
}

const CREATE_TAGS = "CREATE_TAGS";
export function createTags(tagsString) {
  return {
    type: CREATE_TAGS,
    tagsString: tagsString,
  };
}

const SAVE_INITIAL_STATE_TO_STORAGE = "SAVE_INITIAL_STATE_TO_STORAGE";
export function saveInitialTagsToStorage() {
  return {
    type: SAVE_INITIAL_STATE_TO_STORAGE,
  };
}

let initialState = {
  tags: [],
  colors: [
    "red",
    "purple",
    "olive",
    "reddish-brown",
    "green",
    "blue",
    "emerald",
    "plum",
    "teal",
    "brown",
  ],
};

export default function tagsReducer(state = initialState, action) {
  switch (action.type) {
    case GET_SAVED_TAGS:
      return getSavedTagsAPI();
    default:
      return state;
  }
}
