import React from "react";
import CategoriesFilter from "./categories-filter";
import "./subheader.css";
import TagRow from "./tag-row";
import AddArticleButton from "./add-article-button";

export default function Subheader(props) {
  return (
    <div className="subheader subheader-position">
      <div className="subheader__filter-block">
        <CategoriesFilter />
        <TagRow />
      </div>
      <AddArticleButton />
    </div>
  );
}
