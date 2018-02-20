import React from "react";
import PropTypes from "prop-types";
import Link from "gatsby-link";
import Helmet from "react-helmet";
import Footer from "../components/footer";

import "../styles/styles.scss";

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Ria Carmin | Interface Engineer"
      meta={[
        { name: "description", content: "Hello! I am a UX Engineer and JavaScript Developer in Vancouver, Canada. I strive to create amazing and memorable experiences for people on the web. I specialize in creating scalable design systems and modular approach. I also love learning and experimenting with all things JavaScript." },
        { name: "keywords", content: "React, Angular, Preact, GraphQL, developer, designer" }
      ]}
      link={[{ rel: "canonical", href: "http://www.riacarmin.com" }]}
    />
    {children()}
    <Footer />
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func
};

export default TemplateWrapper;
