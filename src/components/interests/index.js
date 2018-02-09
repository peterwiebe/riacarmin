import React from "react";
import style from "./style.module.scss";

import List from "../list";

function Interests() {
  return (
    <section className={style.interests}>
      <h2>I like working with...</h2>
      <div className={style.interests__lists}>
        <List />
        <List />
        <List />
      </div>
    </section>
  );
}

export default Interests;
