import React from "react";
import style from "./style.module.scss";

const Navigation = ({ navigation }) => (
  <ul className={style.navigation}>
    {navigation.map(({ node }) => (
      <li className={style.navigation__item} key={node.id}>
        <a href={node.url}>{node.display}</a>
      </li>
    ))}
  </ul>
);

export default Navigation;
