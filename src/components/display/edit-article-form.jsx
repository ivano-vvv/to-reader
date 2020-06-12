import React from "react";
import { Form, Field } from "redux-form";
import Textarea from "./common/textarea";

export default function EditArticleForm(props) {
  return (
    <div>
      <button onClick={props.onDeleteClick}>Удалить</button>
      <Form onSubmit={props.handleSubmit}>
        <Field
          rows="4"
          name="tags"
          component={Textarea}
          placeholder="теги через запятую"
        />
        <button type="submit">Добавить теги</button>
      </Form>
    </div>
  );
}
