let initialState = { tags: [], firstList: [], haveRead: [] };

const CREATE_TAG_FILTER = "CREATE_TAG_FILTER";
export function createTagFilter(tagId) {
  return {
    type: CREATE_TAG_FILTER,
    id: tagId,
  };
}

export default function filterReducer(state = initialState, action) {
  switch (action.type) {
    case CREATE_TAG_FILTER:
        return { ...state, tags: [ ...state.tags, { id: action.id } ] }

    default:
      return state;
  }
}
