const GET_SAVED_ARTICLES = "GET_SAVED_ARTICLES";
export function getSavedArticles() {
  return { type: GET_SAVED_ARTICLES };
}

const SAVE_ARTICLE = "SAVE_ARTICLE";
export function saveArticle(articleData) {
  return {
    type: SAVE_ARTICLE,
    article: {
      link: articleData.link,
      title: articleData.title,
      desc: articleData.desc,
      cover: articleData.cover,
    },
  };
}

const DELETE_ARTICLE = "DELETE_ARTICLE";
export function deleteArticle(articleId) {
  return {
    type: DELETE_ARTICLE,
    articleId,
  };
}

let initialState = [];

export default function articlesReducer(state = initialState, action) {
  let tempState = [],
    newState = [];

  switch (action.type) {
    case GET_SAVED_ARTICLES:
      return JSON.parse(localStorage.getItem("articlesPack"));
    case SAVE_ARTICLE:
      tempState = JSON.parse(localStorage.getItem("articlesPack"));
      tempState.push({ id: tempState.length + 1, ...action.article });
      localStorage.setItem("articlesPack", JSON.stringify(tempState));
      return JSON.parse(localStorage.getItem("articlesPack"));
    case DELETE_ARTICLE:
      tempState = JSON.parse(localStorage.getItem("articlesPack"));
      newState = tempState.filter((i) => i.id !== action.articleId);
      localStorage.setItem("articlesPack", JSON.stringify(newState));
      return JSON.parse(localStorage.getItem("articlesPack"));
    default:
      return state;
  }
}
