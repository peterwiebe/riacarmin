import React from "react";
import style from "./style.module.scss";

function Navigation() {
  return (
    <ul className={style.navigation}>
      <li className={style.navigation__item}>
        <a href="#about">Resume</a>
      </li>
      <li className={style.navigation__item}>
        <a href="#about">Code / Experiments</a>
      </li>
      <li className={style.navigation__item}>
        <a href="#work">Case Studies / Work</a>
      </li>
      <li className={style.navigation__item}>
        <a href="#journal">Journal / Notes</a>
      </li>
      <li className={style.navigation__item}>
        <a href="mailto:ria.carmin@gmail.com" target="_blank">
          Contact
        </a>
      </li>
    </ul>
  );
}

export default Navigation;
