import React from "react";
import Content from "../display/content";
import { useSelector, useDispatch } from "react-redux";
import { getSavedArticles } from "../../redux/reducers/articleReducer";

export default function ContentContainer(props) {
  const dispatch = useDispatch();

  dispatch(getSavedArticles());

  const articlesPack = useSelector((state) => state.articlesPack);

  return <Content articlesPack={articlesPack} />;
}
