import React from "react";
import Link from "gatsby-link";

import Cover from "../components/cover";

const IndexPage = ({ data }) => (
  <main className="view">
    {console.log(data)}
    <Cover />
  </main>
);

export default IndexPage;

export const indexPageQuery = graphql`
  query AboutQuery {
    allContentfulAbout {
      edges {
        node {
          body {
            body
          }
        }
      }
    }
  }
`;
