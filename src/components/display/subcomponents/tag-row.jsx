import React from "react";
import "./tag-row.css";
import Tag from "../common/tag";

export default function TagRow(props) {
  let tags = [
    {
      id: 1,
      title: "UI/UX",
      colorHex: "923535",
    },
    {
      id: 2,
      title: "Психология",
      colorHex: "624C7D",
    },
    {
      id: 3,
      title: "JavaScript",
      colorHex: "923535",
    },
    {
      id: 4,
      title: "Здоровье",
      colorHex: "923535",
    },
    {
      id: 5,
      title: "Граф. дизайн",
      colorHex: "196A6A",
    },
  ];

  return (
    <div className="tag-row subheader__tag-row">
      <Tag type='button' position='tag-row' colorHex={tags[0].colorHex} title={tags[0].title} />
      <Tag type='button' position='tag-row' colorHex={tags[1].colorHex} title={tags[1].title} />
      <Tag type='button' position='tag-row' colorHex={tags[2].colorHex} title={tags[2].title} />
      <Tag type='button' position='tag-row' colorHex={tags[3].colorHex} title={tags[3].title} />
    </div>
  );
}
