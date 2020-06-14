import { getSavedArticlesAPI, saveArticleAPI, deleteArticleAPI, getSavedTagsAPI, getSavedArticlesWithTagsFilterAPI } from "../../DAL/storageAPI";

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

const GET_ARTICLES_WITH_TAGS ='GET_ARTICLES_WITH_TAGS';
export function getArticlesWithTagFilter(tags) {
  return {
    type: GET_ARTICLES_WITH_TAGS,
    tags,
  }
}

let initialState = [];

export default function articlesReducer(state = initialState, action) {
  switch (action.type) {
    case GET_SAVED_ARTICLES:
      return getSavedArticlesAPI();
    case SAVE_ARTICLE:
      saveArticleAPI(action.article);
      return getSavedTagsAPI(state);
    case DELETE_ARTICLE:
      return deleteArticleAPI(action.articleId);
    case GET_ARTICLES_WITH_TAGS:
      return getSavedArticlesWithTagsFilterAPI(action.tags);
    default:
      return state;
  }
}
