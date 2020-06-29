import React from "react";
import Logotype from "./logotype";
import './header.css'
import './header-container.css'
import './container.css'
import { Link } from "react-router-dom";

export default function Header(props) {
  return (
    <header className="header">
      <div className="header-container container">
        <Link to='/' ><Logotype /></Link>
        <Link to='/login' className="header-container__login hidden">Вход/регистрация</Link>
      </div>
    </header>
  );
}