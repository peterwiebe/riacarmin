import React from "react";
import Link from "gatsby-link";

import Cover from "../components/cover";
import Interests from "../components/interests";

const IndexPage = () => (
  <main className="view">
    <Cover />
    <Interests />
  </main>
);

export default IndexPage;
