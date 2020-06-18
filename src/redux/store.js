import { createStore, combineReducers } from "redux";
import articlesReducer from "./reducers/articleReducer";
import previewCardReducer from "./reducers/previewCardReducer";
import { reducer as formReducer } from "redux-form";
import tagsReducer from "./reducers/tagsReducer";
import filterReducer from "./reducers/filterReducer";

let reducers = combineReducers({
  articlesPack: articlesReducer,
  previewCardData: previewCardReducer,
  tags: tagsReducer,
  filter: filterReducer,
  form: formReducer,
});

let store = createStore(reducers);

export default store;
