let initialState = { tags: [], isFirstList: false, isReadList: false, isUnreadList: false };

const CREATE_TAG_FILTER = "CREATE_TAG_FILTER";
export function createTagFilter(id) {
  return {
    type: CREATE_TAG_FILTER,
    id,
  };
}

const DELETE_TAG_FILTER = "DELETE_TAG_FILTER";
export function deleteTagFilter(id) {
  return {
    type: DELETE_TAG_FILTER,
    id,
  };
}

const DELETE_ALL_TAGS_FILTER = "DELETE_ALL_TAGS_FILTER";
export function deleteAllTagsFilter() {
  return {
    type: DELETE_ALL_TAGS_FILTER,
  };
}

const SWITCH_ON_FIRST_LIST = "SWITCH_ON_FIRST_LIST";
export function switchOnFirstList() {
  return {
    type: SWITCH_ON_FIRST_LIST,
  };
}

const SWITCH_ON_READ_LIST = "SWITCH_ON_READ_LIST";
export function switchOnReadList() {
  return {
    type: SWITCH_ON_READ_LIST,
  };
}

const SWITCH_ON_UNREAD_LIST = "SWITCH_ON_UNREAD_LIST";
export function switchOnUnreadList() {
  return {
    type: SWITCH_ON_UNREAD_LIST,
  };
}

const CLEAR_FILTER = "CLEAR_FILTER";
export function clearFilter() {
  return { type: CLEAR_FILTER };
}

export default function filterReducer(state = initialState, action) {
  switch (action.type) {
    case CREATE_TAG_FILTER:
      return { ...state, tags: [...state.tags, { id: action.id }] };
    case DELETE_TAG_FILTER:
      return {
        ...state,
        tags: state.tags.filter((t) => {
          return t.id !== action.id;
        }),
      };
    case DELETE_ALL_TAGS_FILTER:
      return {
        ...state,
        tags: [],
      };
    case SWITCH_ON_FIRST_LIST:
      return { tags: [], isFirstList: true, isReadList: false, isUnreadList: false };
    case SWITCH_ON_READ_LIST:
      return { tags: [...state.tags], isFirstList: false, isReadList: true, isUnreadList: false };
    case SWITCH_ON_UNREAD_LIST:
      return { tags: [...state.tags], isFirstList: false, isReadList: false, isUnreadList: true };
    case CLEAR_FILTER:
      return { tags: [], isFirstList: false, isReadList: false, isUnreadList: false };
    default:
      return state;
  }
}
