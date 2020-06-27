import React from "react";
import EditArticleFormContainer from "../container/edit-article-section__edit-article-form";
import "./article-form-section.css";
import { Link } from "react-router-dom";

export default function EditArticleSection(props) {
  return (
    <div className="article-form-section">
      <div className="article-form-section__header">
        <h2 className="article-form-section__heading">Редактировать статью</h2>
        <Link to="/home" className="article-form-section__close-cross" />
      </div>
      <EditArticleFormContainer {...props} />
    </div>
  );
}
