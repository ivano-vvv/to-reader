import React from "react";
import "./article-card.css";
import { ServiceButton } from "./service-button";
import Tag from "./tag";

export default function ArticleCard(props) {
  let coverDisplayClass = !props.cover ? "hidden" : "";
  let headingMarginClass = !props.cover
    ? "article-card__heading_zero-margin-top"
    : "";

    return (
    <div className={"article-card " + props.locationClassName}>
      <a
        href={props.link}
        className="article-card__cover-container"
        target="_blank"
      >
        <img
          className={"article-card__cover " + coverDisplayClass}
          src={props.cover}
          alt={props.title}
        />
      </a>
      <a href={props.link}>
        <h2
          className={"article-card__heading " + headingMarginClass}
          target="_blank"
        >
          {props.title}
        </h2>
      </a>
      <p className="article-card__desc">{props.desc}</p>
      <div className="article-card__button-block">
        <a className="article-card__button" href={props.link} target="_blank">
          Читать
        </a>
        <ServiceButton
          className="article-card__service-button"
          type="isRead"
          isActive={props.isRead}
          id={props.id}
        />
        <ServiceButton
          className="article-card__service-button"
          type="edit"
          id={props.id}
        />
        <ServiceButton
          className="article-card__service-button"
          type="first-list"
          isActive={props.isFirstList}
          id={props.id}
        />
      </div>
      {props.tags ? (
        <div className="article-card__tags-block">
          {props.tags.map((t) => {
            return (
              <Tag
                value={t.value}
                color={t.color}
                position="article-card"
                type="label"
              />
            );
          })}
        </div>
      ) : (
        <div />
      )}
    </div>
  );
}
