import {
  getSavedArticlesAPI,
  saveArticleAPI,
  deleteArticleAPI,
  getSavedTagsAPI,
} from "../../DAL/storageAPI";

const GET_SAVED_ARTICLES = "GET_SAVED_ARTICLES";
export function getSavedArticles(filter) {
  return { type: GET_SAVED_ARTICLES, filter };
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

let initialState = [];

export default function articlesReducer(state = initialState, action) {
  switch (action.type) {
    case GET_SAVED_ARTICLES:
      return getSavedArticlesAPI(action.filter);
    case SAVE_ARTICLE:
      saveArticleAPI(action.article);
      return getSavedTagsAPI(state);
    case DELETE_ARTICLE:
      return deleteArticleAPI(action.articleId);
    default:
      return state;
  }
}
