import React from "react";
import Link from "gatsby-link";
import { Helmet } from "react-helmet";


import Cover from "../components/cover";

const IndexPage = () => (
  <main className="view">
    <Helmet>
      <meta charSet="utf-8" />
      <title>Ria Carmin | Interface Engineer</title>
      <link rel="canonical" href="http://www.riacarmin.com" />
    </Helmet>
    <Cover />
  </main>
);

export default IndexPage;
