import React from "react";
import "./welcome.css";
import { useDispatch } from "react-redux";
import { setTestArticles } from "../../redux/reducers/articleReducer";
import { useHistory } from "react-router-dom";

export default function Welcome(props) {
  const dispatch = useDispatch();
  const history = useHistory();
  function onTestClick() {
    dispatch(setTestArticles());
  }

  function onAddClick() {
    history.push("/add");
  }

  return (
    <div className="welcome-page container">
      <div className="welcome-card welcome-page__welcome-card">
        <h2 className="welcome-card__heading">Привет!</h2>
        <p className="welcome-card__desc">
          Похоже, вы в первый раз запустили ToReader — или, по крайней мере, у
          вас еще нет сохраненных материалов.
          <br />
          <br /> Вы можете сохранить свою первую статью, нажав на кнопку
          «Добавить». Если вам интересно в первую очередь оценить функционал
          приложения, вы можете сразу загрузить примеры статей, нажав на кнопку
          «Тест».
          <br />
          <br /> Приятного чтения!
        </p>
        <div className="welcome-card__button-block">
          <button
            onClick={onTestClick}
            className="welcome-card__button welcome-card__button_accent"
          >
            Тест
          </button>
          <button
            onClick={onAddClick}
            className="welcome-card__button welcome-card__button_main"
          >
            Добавить
          </button>
        </div>
      </div>
    </div>
  );
}
