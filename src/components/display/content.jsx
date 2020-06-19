import React from "react";
import "./content.css";
import "./container.css";
import Subheader from "../display/subheader";
import Masonry from "react-masonry-css";
import ArticleCardContainer from "../container/content__article-card";

export default function Content(props) {
  return (
    <div className="container">
      <Subheader />
      <div className="content container">
        <Masonry
          breakpointCols={3}
          className="articles-masonry-grid"
          columnClassName="articles-masonry-grid__column"
        >
          {props.articlesPack.map((a) => {
            return (
              <ArticleCardContainer
                title={a.title}
                desc={a.desc}
                link={a.link}
                cover={a.cover}
                id={a.id}
                tags={a.tags}
                isFirstList={a.isFirstList}
                isRead={a.isRead}
              />
            );
          })}
        </Masonry>
      </div>
    </div>
  );
}
