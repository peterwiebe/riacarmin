import React from "react";
import style from "./style.module.scss";

import Animation from "./animation";

import Name from "../name";
import About from "../about";
import index from "../about";

class Cover extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    const animate = new Animation(this.coverSection, this.coverCanvas);
    animate.cover();
  }
  render() {
    return (
      <section className={style.cover}>
        <div className={style.cover__leftColumn}
          ref={el => {
            this.coverSection = el;
          }}
        >
          <Name />

          <canvas ref={el => {
            this.coverCanvas = el;
          }}
            style={{
              position: 'absolute',
              top: 0,
              left: 0
            }}
          ></canvas>
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
      </section>
    );
  }
}

export default Cover;
