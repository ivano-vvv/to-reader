import React from "react";
import "./App.css";
import Header from "./components/display/header";
import Subheader from "./components/display/subheader";
import ContentContainer from "./components/container/app__content";
import store from "./redux/store";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <Subheader />
        <ContentContainer />
      </div>
    </Provider>
  );
}

export default App;
