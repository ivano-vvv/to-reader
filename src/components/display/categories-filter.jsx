import React from "react";
import "./categories-filter.css";
import FirstListSwitcherContainer from "../container/categories-filter__first-list";
import AllArticlesSwitcherContainer from "../container/categories-filter__all-articles";
import ReadListSwitcherContainer from "../container/categories-filter__read";
import UnreadListSwitcherContainer from "../container/categories-filter__unread";

export default function CategoriesFilter(props) {
  return (
    <div className="categories-filter">
      <FirstListSwitcherContainer
        className="categories-filter__item"
        value="В первую очередь"
      />
      <span className="categories-filter__divider">|</span>
      <UnreadListSwitcherContainer
        className="categories-filter__item"
        value="Непрочитанное"
      />
      <span className="categories-filter__divider">|</span>
      <ReadListSwitcherContainer
        className="categories-filter__item"
        value="Прочитанное"
      />
      <span className="categories-filter__divider">|</span>
      <AllArticlesSwitcherContainer
        className="categories-filter__item"
        value="Все"
      />
    </div>
  );
}
