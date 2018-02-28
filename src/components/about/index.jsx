import React from "react"
import PropTypes from "prop-types"
import style from "./style.module.scss"
import Navigation from "../navigation"

const About = ({ about, navigation }) => (
  <section className={`${style.about} ${style.about__inner}`}>
    <article dangerouslySetInnerHTML={{ __html: about }} />
    <Navigation navigation={navigation} />
  </section>
)
export default About
