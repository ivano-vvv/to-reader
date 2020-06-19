import React from "react";
import ArticleCard from "../display/common/article-card";
import { useSelector } from "react-redux";

export default function ArticleCardContainer(props) {
  const tagsState = useSelector((state) => state.tags);

  let tags = [];
  if (props.tags) {
    tags = getTagsById(props.tags, tagsState.tags);
  }

  return (
    <ArticleCard
      title={props.title}
      desc={props.desc}
      link={props.link}
      cover={props.cover}
      id={props.id}
      isFirstList={props.isFirstList}
      isRead={props.isRead}
      tags={tags}
      locationClassName="articles-masonry-grid__article-card"
    />
  );

  function getTagsById(tagsId, tagsState) {
    return tagsId.map((t) => {
      for (let i = 0; i < tagsState.length; i++) {
        if (t === tagsState[i].id) {
          return tagsState[i];
        }
      }
    });
  }
}
