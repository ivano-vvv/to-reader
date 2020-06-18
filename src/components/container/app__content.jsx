import React from "react";
import Content from "../display/content";
import { shallowEqual, useSelector, useDispatch } from "react-redux";
import { getSavedArticles } from "../../redux/reducers/articleReducer";

export default function ContentContainer(props) {
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.filter, shallowEqual);

  dispatch(getSavedArticles(filter));

  const articlesPack = useSelector((state) => state.articlesPack);

  return <Content articlesPack={articlesPack} />;
}
