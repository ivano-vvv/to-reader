import {
  saveArticleAPI,
  deleteArticleAPI,
  getSavedArticlesAPI,
  switchFirstListArticleStatusAPI,
  switchHaveReadListArticleStatusAPI,
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

const SWITCH_FIRST_LIST_STATUS = "SWITCH_FIRST_LIST_STATUS";
export function switchFirstListArticleStatus(id, filter) {
  return {
    type: SWITCH_FIRST_LIST_STATUS,
    id,
    filter,
  };
}

const SWITCH_READ_STATUS = "SWITCH_READ_STATUS";
export function switchReadArticleStatus(id, filter) {
  return {
    type: SWITCH_READ_STATUS,
    id,
    filter,
  };
}

let initialState = [];

export default function articlesReducer(state = initialState, action) {
  switch (action.type) {
    case SET_ARTICLES:
      return action.articlesPack;
    case SAVE_ARTICLE:
      return saveArticleAPI(action.article);
    case DELETE_ARTICLE:
      return deleteArticleAPI(action.articleId);
    case SWITCH_FIRST_LIST_STATUS:
      return switchFirstListArticleStatusAPI(action.id, action.filter);
    case SWITCH_READ_STATUS:
      return switchHaveReadListArticleStatusAPI(action.id, action.filter);
    default:
      return state;
  }
}
