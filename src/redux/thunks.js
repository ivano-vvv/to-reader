import {
  getSavedArticlesAPI,
} from "../DAL/storageAPI";
import { setArticles } from "./reducers/articleReducer";

export function getSavedArticles(filter) {
  const articlesPack = getSavedArticlesAPI(filter);

  return (dispatch) => {
    dispatch(setArticles(articlesPack));
  };
}

