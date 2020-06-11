import React from "react";
import "./adding-article.css";
import ArticleCardContainer from "../container/adding-article__preview-card";
import AddArticleSection from "./add-article-section";

export default function AddingArticle(props) {
  return (
    <div className="container adding-article">
      <ArticleCardContainer />
      <AddArticleSection />
    </div>
  );
}
