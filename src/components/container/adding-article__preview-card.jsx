import React from "react";
import ArticleCard from "../display/common/article-card";
import { useSelector } from "react-redux";

export default function ArticleCardContainer(props) {
  const previewCardData = useSelector((state) => state.articleForm);

  return (
    <ArticleCard
      title={
        previewCardData.values.title.length !== 0
          ? previewCardData.values.title
          : "Название статьи (макс.\u00A080\u00A0символов)"
      }
      desc={
        previewCardData.values.desc.length !== 0
          ? previewCardData.values.desc
          : "Описание материала (макс.\u00A0280\u00A0символов)"
      }
      cover={previewCardData.coverForPreview}
      locationClassName="adding-article__article-card"
      isFirstList={previewCardData.values.firstListCheck}
      isPreview={true}
    />
  );
}
