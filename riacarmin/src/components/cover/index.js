import React from "react";
import style from "./style.module.scss";

import animation from "./animation";

import Name from "../name";
import About from "../about";

class Cover extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    animation.show(this.coverSection, () => {});
  }
  render() {
    return (
      <section
        ref={el => {
          this.coverSection = el;
        }}
        className={style.cover}
      >
        <div className={style.cover__leftColumn}>
          <Name />
          <div
            className={`${style.cover__skewed} ${style.cover__skewed__left__1}`}
          >
            &nbsp;
          </div>
          <div
            className={`${style.cover__skewed} ${style.cover__skewed__left__2}`}
          >
            &nbsp;
          </div>
        </div>

        <div className={style.cover__rightColumn}>
          <About />
          <div
            className={`${style.cover__skewed} ${
              style.cover__skewed__right__1
            }`}
          >
            &nbsp;
          </div>
          <div
            className={`${style.cover__skewed} ${
              style.cover__skewed__right__2
            }`}
          >
            &nbsp;
          </div>
        </div>
      </section>
    );
  }
}

export default Cover;
