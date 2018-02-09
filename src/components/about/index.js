import React from "react";
import style from "./style.module.scss";
import * as PropTypes from "prop-types";
import Navigation from "../navigation";

const propTypes = {
  about: PropTypes.string.isRequired,
  navigation: PropTypes.array.isRequired
};

const About = ({ about, navigation }) => (
  <section className={`${style.about} ${style.about__inner}`}>
    <article dangerouslySetInnerHTML={{ __html: about }} />
    <Navigation navigation={navigation} />
  </section>
);

export default About;
