import React from "react";
import "./article-form-section.css";
import { Link } from "react-router-dom";
import AddArticleFormContainer from "../container/add-article-section__add-article-form";

export default function AddArticleSection(props) {
  return (
    <div className="article-form-section">
      <div className="article-form-section__header">
        <h2 className="article-form-section__heading">Добавить статью</h2>
        <Link to="/home" className="article-form-section__close-cross">
          {" "}
        </Link>
      </div>
      <AddArticleFormContainer />
    </div>
  );
}
