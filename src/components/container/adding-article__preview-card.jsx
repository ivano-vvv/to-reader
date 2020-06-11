import React from "react";
import ArticleCard from "../display/common/article-card";
import { useSelector } from "react-redux";

export default function ArticleCardContainer(props) {
  const previewCardData = useSelector((state) => state.previewCardData);

  return (
    <ArticleCard
      title={previewCardData.title}
      desc={previewCardData.desc}
      cover={previewCardData.cover}
      locationClassName='adding-article__article-card'
    />
  );
}
