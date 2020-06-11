import React from "react";
import EditArticleFormContainer from "../container/edit-article-section__edit-article-form";

export default function EditArticleSection(props) {
  return (
    <div>
      <h1>Удалить</h1>
      <EditArticleFormContainer {...props} />
    </div>
  );
}
