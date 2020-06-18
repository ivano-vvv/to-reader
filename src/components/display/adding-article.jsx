import React from "react";
import "./adding-article.css";
import ArticleCardContainer from "../container/adding-article__preview-card";
import AddArticleSection from "./add-article-section";
import Subheader from "./subheader";

export default function AddingArticle(props) {
  return (
    <div>
      <div className="container adding-article">
        <ArticleCardContainer />
        <AddArticleSection />
      </div>
    </div>
  );
}
