import React from "react";
import CategoriesFilter from "./categories-filter";
import "./subheader.css";
import AddArticleButton from "./add-article-button";
import TagRowContainer from "../container/subheader__tag-row";

export default function Subheader(props) {
  return (
    <div className="subheader subheader-position">
      <div className="subheader__filter-block">
        <CategoriesFilter />
        <TagRowContainer />
      </div>
      <AddArticleButton />
    </div>
  );
}
