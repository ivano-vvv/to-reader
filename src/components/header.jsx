import React from "react";
import Logotype from "./subcomponents/logotype";
import './header.css'
import './header-container.css'
import './subcomponents/container.css'
import { NavLink } from "react-router-dom";

export default function Header(props) {
  return (
    <header className="header">
      <div className="header-container container">
        <Logotype />
        <NavLink to='/login' className="header-container__login">Вход/регистрация</NavLink>
      </div>
    </header>
  );
}