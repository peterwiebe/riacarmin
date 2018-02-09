import React from "react";
import PropTypes from "prop-types";
import Link from "gatsby-link";
import Helmet from "react-helmet";

import "../styles/styles.scss";

const TemplateWrapper = ({ children }) => (
  <div className="view">
    <Helmet
      title="Ria Carmin | Interface Engineer"
      meta={[
        { name: "description", content: "Sample" },
        { name: "keywords", content: "sample, something" }
      ]}
      link={[{ rel: "canonical", href: "http://www.riacarmin.com" }]}
    />
    {children()}
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func
};

export default TemplateWrapper;
