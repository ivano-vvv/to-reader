import React from "react";
import "./add-article-section.css";
import { Link } from "react-router-dom";
import AddArticleFormContainer from "../container/add-article-section__add-article-form";

export default function AddArticleSection(props) {
  return (
    <div className="add-article-section">
      <div className="add-article-section__header">
        <h2 className="add-article-section__heading">Добавить статью</h2>
        <Link to='/home' className="add-article-section__close-cross"> </Link>
      </div>
      <AddArticleFormContainer />
    </div>
  );
}
