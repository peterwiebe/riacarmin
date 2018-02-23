import React from "react";
import style from "./style.module.scss";

import Name from "../name";
import About from "../about";
import Animation from "./animation";

class Cover extends React.Component {
  constructor(props) {
    super(props);

  }
  componentDidMount() {

  }

  componentWillUnmount() {

  }
  render() {
    let height;
    if (typeof window !== `undefined`) {
      height = `${window.innerHeight}px`;
    }
    return (
      <section
        className={style.cover}
      >
        <div
          className={style.cover__leftColumn}
          style={{ height }}
          ref={el => {
            this.coverSection = el;
          }}
        >
          <Name />
          <Animation width={window.innerWidth / 2} height={window.innerHeight} />

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

        <div className={style.cover__rightColumn} style={{ height }}>
          <About
            about={this.props.data.about}
            navigation={this.props.data.navigation}
          />
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
      </section >
    );
  }
}

export default Cover;
