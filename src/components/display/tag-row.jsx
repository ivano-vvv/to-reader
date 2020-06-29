import React from "react";
import "./tag-row.css";
import TagContainer from "../container/tag-container";
import TagFilterModal from "../modals/tag-filter-modal";

export default function TagRow(props) {
  let tagsAmount = props.tags.length > 4 ? 4 : props.tags.length;

  let renderedTags = props.tags.slice(0, tagsAmount);

  return (
    <div className="tag-row subheader__tag-row">
      {renderedTags.map((t) => {
        return (
          <TagContainer
            type="button"
            position="tag-row"
            color={t.color}
            value={t.value}
            id={t.id}
            key={t.id}
          />
        );
      })}
      {props.tags.length > 4 ? <TagFilterModal /> : <div />}
    </div>
  );
}
