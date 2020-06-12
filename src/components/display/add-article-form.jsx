import React from "react";
import "./add-article-form.css";
import defaultCoverPreview from "../../assets/cover-default.svg";
import { Field, Form } from "redux-form";
import Textarea from "./common/textarea";
import Input from "./common/input";
import FormLabel from "./common/form-label";

export default function AddArticleForm(props) {
  return (
    <Form onSubmit={props.handleSubmit} className="add-article-form">
      <div className="add-article-form__link-block">
        <FormLabel
          text="Ссылка"
          htmlFor="link"
          className="add-article-form__label"
        />
        <Field
          component={Input}
          placeholder="https://"
          className="add-article-form__link-input"
          name="link"
        />
      </div>
      <div className="add-article-form__main-info">
        <div className="add-article-form__text-input-blocks">
          <div className="add-article-form__title-block">
            <FormLabel
              text="Название"
              htmlFor="title"
              className="add-article-form__label"
            />
            <Field
              rows="2"
              className="add-article-form__title-input"
              name="title"
              component={Textarea}
            ></Field>
          </div>
          <div className="add-article-form__desc-block">
            <FormLabel
              text="Описание"
              htmlFor="desc"
              className="add-article-form__label add-article-form__label-oneline-input"
            />
            <Field
              name="desc"
              component={Textarea}
              rows="4"
              className="add-article-form__desc-input"
            />
          </div>
        </div>
        <div className="add-article-form__cover-block">
          <label className="add-article-form__label">Обложка</label>
          <img
            src={defaultCoverPreview}
            className="add-article-form__cover-preview"
          />
          <div className="add-article-form__input-block">
            <FormLabel
              text="Ссылка на изображение"
              htmlFor="cover"
              className="add-article-form__label"
            />
            <Field
              name="cover"
              component={Input}
              placeholder="https://"
              className="add-article-form__cover-link-input"
            ></Field>
          </div>
        </div>
      </div>
      <div className="add-article-form__first-list-block">
        <Field
          name="first-list-check"
          component="input"
          type="checkbox"
          className="add-article-form__input add-article-form__first-list-checkbox"
        ></Field>
        <FormLabel
          htmlFor="first-list-check"
          text="Добавить в первоочередный список"
          className="add-article-form__label add-article-form__first-list-label"
        />
      </div>
      <div className="add-article-form__tags-block">
        <FormLabel
          text="Теги"
          htmlFor="tags"
          className="add-article-form__label add-article-form__label-oneline-input"
        />
        <Field
          rows="2"
          className="add-article-form__tags-input input_textarea-tags"
          name="tags"
          placeholder='Перечислите теги через запятую...'
          component={Textarea}
        ></Field>
      </div>
      <div className="add-article-form__buttons-block">
        <button className="add-article-form__button add-article-form__button_cancel">
          Отменить
        </button>
        <button
          className="add-article-form__button add-article-form__button_save"
          type="submit"
        >
          Сохранить статью
        </button>
      </div>
    </Form>
  );
}
