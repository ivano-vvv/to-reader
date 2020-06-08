const GET_SAVED_ARTICLES = "GET_SAVED_ARTICLES";
export function getSavedArticles() {
  return { type: GET_SAVED_ARTICLES };
}

let initialState = [];

export default function articlesReducer(state = initialState, action) {
  switch (action.type) {
    case GET_SAVED_ARTICLES:
      return JSON.parse(localStorage.getItem("articlesPack"));

    default:
      return state;
  }
}
