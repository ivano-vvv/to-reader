import React from "react";
import "./content.css";
import "./subcomponents/container.css";
import ArticleCard from "./subcomponents/article-card";
import Masonry from "react-masonry-css";

export default function Content(props) {

  return (
    <div className="content container">
      <Masonry
      breakpointCols={3}
      className='articles-masonry-grid'
      columnClassName='articles-masonry-grid__column'
      >
        {props.articlesPack.map((a) => {
          return (
            <ArticleCard
              title={a.title}
              desc={a.desc}
              link={a.link}
              cover={a.cover}
            />
          );
        })}
      </Masonry>
    </div>
  );
}
