import React from "react";
import Link from "gatsby-link";

import Header from "../components/header";

const IndexPage = () => (
  <div>
    <Header />
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Link to="/page-2/">Go to page 2</Link>
  </div>
);

export default IndexPage;
