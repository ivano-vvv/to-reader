import React from "react";
import "./App.css";
import Header from "./components/display/header";
import ContentContainer from "./components/container/app__content_class";
import store from "./redux/store";
import { Provider } from "react-redux";
import { Route, Switch } from "react-router-dom";
import AddingArticle from "./components/display/adding-article";
import EditPageContainer from "./components/container/app__edit-page";

window.store = store;

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/add">
            <AddingArticle />
          </Route>
          <Route
            path="/edit"
            render={(props) => <EditPageContainer {...props} />}
          />
          <Route path="/">
            <ContentContainer />
          </Route>
        </Switch>
      </div>
    </Provider>
  );
}

export default App;
