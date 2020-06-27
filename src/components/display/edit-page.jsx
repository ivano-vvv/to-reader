import React from "react";
import ArticleCardContainer from "../container/adding-article__preview-card";
import EditArticleSection from "./edit-article-section";
import "./form-page.css";

export default function EditPage(props) {
  return (
    <div className="container form-page">
      <ArticleCardContainer />
      <EditArticleSection {...props} />
    </div>
  );
}
