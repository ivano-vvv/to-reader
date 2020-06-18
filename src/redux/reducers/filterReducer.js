let initialState = { tags: [], firstList: [], haveRead: [] };

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
    default:
      return state;
  }
}
