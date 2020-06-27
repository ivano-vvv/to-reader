import React from "react";
import "./article-form.css";
import defaultCoverPreview from "../../../assets/cover-default.svg";
import Textarea from "./textarea";
import Input from "./input";
import FormLabel from "./form-label";

export default function ArticleForm(props) {
  let stopSubmitError = props.values.link === "" || props.values.title === "";
  function buttonClassConstructor(error) {
    return error
      ? "article-form__button article-form__button_save article-form__button_disabled"
      : "article-form__button article-form__button_save";
  }

  return (
    <form onSubmit={props.onSubmit} className="article-form">
      <div className="article-form__link-block article-form__block">
        <FormLabel
          text="Ссылка"
          htmlFor="link"
          className="article-form__label"
        />
        <span
          className={
            "article-form__error-notification article-form__error-notification_link " +
            (props.touchedErrors.link_isEmpty ? "" : "hidden")
          }
        >
          Обязательно
        </span>
        <Input
          autocomplete="off"
          placeholder="https://"
          className="article-form__link-input"
          name="link"
          value={props.values.link}
          onChange={props.onChange}
          onBlur={props.onBlur}
          error={props.touchedErrors.link_isEmpty}
        />
      </div>
      <div className="article-form__main-info article-form__block">
        <div className="article-form__text-input-blocks">
          <div className="article-form__title-block article-form__block">
            <FormLabel
              text="Название"
              htmlFor="title"
              className="article-form__label"
            />
            <span
              className={
                "article-form__error-notification article-form__error-notification_title " +
                (props.touchedErrors.title_isEmpty ? "" : "hidden")
              }
            >
              Обязательно
            </span>
            <span
              className={
                "article-form__error-notification article-form__error-notification_title " +
                (props.onChangeErrors.title_maxLength ? "" : "hidden")
              }
            >
              Не более 80 символов
            </span>
            <Textarea
              rows="2"
              className="article-form__title-input"
              name="title"
              value={props.values.title}
              onChange={props.onChange}
              onBlur={props.onBlur}
              error={props.touchedErrors.title_isEmpty}
            ></Textarea>
          </div>
          <div className="article-form__desc-block article-form__block">
            <FormLabel
              text="Описание"
              htmlFor="desc"
              className="article-form__label article-form__label-oneline-input"
            />
            <span
              className={
                "article-form__error-notification article-form__error-notification_title " +
                (props.onChangeErrors.desc_maxLength ? "" : "hidden")
              }
            >
              Не более 280 символов
            </span>
            <Textarea
              name="desc"
              rows="4"
              className="article-form__desc-input"
              value={props.values.desc}
              onChange={props.onChange}
              onBlur={props.onBlur}
            />
          </div>
        </div>
        <div className="article-form__cover-block article-form__block">
          <label className="article-form__label">Обложка</label>
          <img
            src={props.preview || defaultCoverPreview}
            className="article-form__cover-preview"
          />
          <div className="article-form__input-block article-form__block">
            <FormLabel
              text="Ссылка на изображение"
              htmlFor="cover"
              className="article-form__label"
            />
            <Input
              autocomplete="off"
              name="cover"
              placeholder="https://"
              className="article-form__cover-link-input"
              value={props.values.cover}
              onChange={props.onChange}
              onBlur={props.onBlur}
            ></Input>
          </div>
        </div>
      </div>
      <div className="article-form__first-list-block article-form__block">
        <input
          name="firstListCheck"
          type="checkbox"
          className="article-form__input article-form__first-list-checkbox"
          checked={props.values.firstListCheck}
          onChange={props.onChange}
        />
        <FormLabel
          htmlFor="firstListCheck"
          text="Добавить в первоочередный список"
          className="article-form__label article-form__first-list-label"
        />
        <span
          className={
            "article-form__error-notification " +
            (props.onChangeErrors.firstList_maxItems ? "" : "hidden")
          }
        >
          В списке не может быть больше 6 статей
        </span>
      </div>
      <div className="article-form__tags-block article-form__block">
        <FormLabel
          text="Теги"
          htmlFor="tags"
          className="article-form__label article-form__label-oneline-input"
        />
        <span
          className={
            "article-form__error-notification article-form__error-notification_tags " +
            (props.onChangeErrors.tags_maxLength ? "" : "hidden")
          }
        >
          Длина одного тега не более 16 символов
        </span>
        <Textarea
          rows="2"
          className="article-form__tags-input input_textarea-tags"
          name="tags"
          placeholder="Перечислите теги через запятую..."
          value={props.values.tags}
          onChange={props.onChange}
        ></Textarea>
      </div>
      <div
        className={
          props.type === "edit"
            ? "article-form__buttons-block article-form__buttons-block_edit"
            : "article-form__buttons-block "
        }
      >
        <button
          className={
            props.type === "edit"
              ? "article-form__button article-form__button_delete"
              : "hidden"
          }
          onClick={props.onDeleteClick}
        >
          Удалить статью
        </button>
        <div className="article-form__buttons-block-main">
          <button className="article-form__button article-form__button_cancel">
            Отменить
          </button>
          <button
            className={buttonClassConstructor(stopSubmitError)}
            type="submit"
            disabled={stopSubmitError}
          >
            Сохранить статью
          </button>
        </div>
      </div>
    </form>
  );
}
