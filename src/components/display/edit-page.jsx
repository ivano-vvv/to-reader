import React from "react";
import ArticleCardContainer from "../container/adding-article__preview-card";
import EditArticleSection from "./edit-article-section";

export default function EditPage(props) {
  return (
    <div className="container edit-article">
      <ArticleCardContainer />
      <EditArticleSection {...props} />
    </div>
  );
}
