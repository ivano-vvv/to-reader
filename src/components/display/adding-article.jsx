import React from "react";
import "./form-page.css";
import ArticleCardContainer from "../container/adding-article__preview-card";
import AddArticleSection from "./add-article-section";

export default function AddingArticle(props) {
  return (
    <div>
      <div className="container form-page">
        <ArticleCardContainer />
        <AddArticleSection />
      </div>
    </div>
  );
}
