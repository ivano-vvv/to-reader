import React from "react";
import "./content.css";
import "./container.css";
import Subheader from "../display/subheader";
import ArticleCard from "./common/article-card";
import Masonry from "react-masonry-css";

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
              <ArticleCard
                title={a.title}
                desc={a.desc}
                link={a.link}
                cover={a.cover}
                id={a.id}
                locationClassName='articles-masonry-grid__article-card'
              />
            );
          })}
        </Masonry>
      </div>
    </div>
  );
}
