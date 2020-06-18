import {
  getSavedArticlesAPI,
  saveArticleAPI,
  deleteArticleAPI,
  getSavedTagsAPI,
} from "../../DAL/storageAPI";

const SET_ARTICLES = "SET_ARTICLES";
export function setArticles(articlesPack) {
  return { type: SET_ARTICLES, articlesPack };
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
      tags: articleData.tags,
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

export function getSavedArticles(filter) {
  return (dispatch) => {
    const articlesPack = getSavedArticlesAPI(filter);
    dispatch(setArticles(articlesPack));
  };
}

let initialState = [];

export default function articlesReducer(state = initialState, action) {
  switch (action.type) {
    case SET_ARTICLES:
      return action.articlesPack;
    case SAVE_ARTICLE:
      saveArticleAPI(action.article);
      return getSavedTagsAPI(state);
    case DELETE_ARTICLE:
      return deleteArticleAPI(action.articleId);
    default:
      return state;
  }
}
