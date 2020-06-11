import React from "react";
import './add-article-button.css';
import { Link } from "react-router-dom";

export default function AddArticleButton(props) {
  return (
    <Link to='/add' className="add-article-button subheader__add-article-button">
      Добавить статью
    </Link>
  );
}
