import React from "react";
import style from "./style.module.scss";

import Navigation from "../navigation";

function About() {
  return (
    <section className={`${style.about} ${style.about__inner}`}>
      <p>
        I am a <strong>product designer</strong> and a{" "}
        <strong>JavaScript developer</strong>. I strive to create great
        interfaces <strong>for people</strong>, on any screen or device. Design
        is a collaborative process. I start with user-centered{" "}
        <strong>research</strong> and get stakeholders on the same page through
        design thinking. I bring the research to life through{" "}
        <strong>wireframing</strong>, <strong>prototyping</strong> and{" "}
        <strong>testing</strong>, and finally polished <strong>visuals</strong>.
      </p>
      <p>
        I write <strong>code</strong> so I can control the final design. I have
        developed and keep improving a boilerplate to create custom{" "}
        <strong>UI frameworks</strong>. There is nothing better than clean and
        scalable code behind the style.
      </p>

      <Navigation />
    </section>
  );
}

export default About;
