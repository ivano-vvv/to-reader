import { createStore, combineReducers, applyMiddleware } from "redux";
import articlesReducer from "./reducers/articleReducer";
import previewCardReducer from "./reducers/previewCardReducer";
import { reducer as formReducer } from "redux-form";
import tagsReducer from "./reducers/tagsReducer";
import filterReducer from "./reducers/filterReducer";
import ReduxThunk from "redux-thunk";
import articleFormReducer from "./reducers/articleFormReducer";

let reducers = combineReducers({
  articlesPack: articlesReducer,
  previewCardData: previewCardReducer,
  tags: tagsReducer,
  filter: filterReducer,
  articleForm: articleFormReducer,
  form: formReducer,
});

let store = createStore(reducers, applyMiddleware(ReduxThunk));

export default store;
