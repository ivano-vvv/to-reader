import { createStore, combineReducers } from "redux";
import articlesReducer from "./reducers/articleReducer";

let reducers = combineReducers({
    articlesPack: articlesReducer,
})

let store = createStore(reducers);

export default store;