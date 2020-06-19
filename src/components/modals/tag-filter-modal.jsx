import React from "react";
import Popup from "reactjs-popup";
import "./tag-filter-modal.css";
import TagContainer from "../container/tag-container";
import { useSelector, useDispatch } from "react-redux";
import { deleteAllTagsFilter } from "../../redux/reducers/filterReducer";
import Button from "../display/common/button";
import ButtonLink from "../display/common/button-link";
import { Link } from "react-router-dom";

export default function TagFilterModal(props) {
  const tagsCloud = useSelector((state) => state.tags.tags);
  const dispatch = useDispatch();

  return (
    <Popup
      trigger={
        <div style={{ display: "flex" }}>
          <ButtonLink className="tag-row__modal-link" value="Все теги..." />
        </div>
      }
      modal
      closeOnDocumentClick
    >
      {(close) => (
        <div className="tags-modal">
          <div className="tags-modal__header">
            <h2 className="tags-modal__h2">Выберите интересующие теги</h2>
          </div>
          <div className="tags-modal__container">
            {tagsCloud.map((t) => {
              return (
                <TagContainer
                  type="button"
                  position="tags-modal"
                  color={t.color}
                  value={t.value}
                  id={t.id}
                />
              );
            })}
          </div>
          <div className="tags-modal__buttons-block">
            <Button
              className="tags-modal__button"
              onClick={() => {
                dispatch(deleteAllTagsFilter());
              }}
              value="Сбросить все"
              type="accent"
            />
            <Button
              className="tags-modal__button"
              onClick={() => {
                close();
              }}
              value="Принять"
            />
          </div>
        </div>
      )}
    </Popup>
  );
}
