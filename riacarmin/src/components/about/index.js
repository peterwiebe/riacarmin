import React from "react";
import style from "./style.module.scss";
import * as PropTypes from "prop-types";
import Navigation from "../navigation";

const propTypes = {
  data: PropTypes.object.isRequired
};

class About extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <section className={`${style.about} ${style.about__inner}`}>
        {console.log(this.props)}
        <Navigation />
      </section>
    );
  }
}

export default About;
