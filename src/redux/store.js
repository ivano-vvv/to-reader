import { createStore, combineReducers } from "redux";
import articlesReducer from "./reducers/articleReducer";
import previewCardReducer from "./reducers/previewCardReducer";
import { reducer as formReducer } from 'redux-form';
import tagsReducer from "./reducers/tagsReducer";

let reducers = combineReducers({
  articlesPack: articlesReducer,
  previewCardData: previewCardReducer,
  tags: tagsReducer,
  form: formReducer,
});

let store = createStore(reducers);

export default store;
