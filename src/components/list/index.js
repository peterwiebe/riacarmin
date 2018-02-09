import React from "react";
import style from "./style.module.scss";

function List() {
  return (
    <ul className={style.list}>
      <li className={style.list__title}>Tech</li>
      <li className={style.list__item}>ES6+</li>
      <li className={style.list__item}>React</li>
      <li className={style.list__item}>Angular 2+</li>
      <li className={style.list__item}>GraphQl</li>
    </ul>
  );
}

export default List;
