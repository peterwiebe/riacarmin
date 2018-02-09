import React from "react";
import Link from "gatsby-link";

import Cover from "../components/cover";

const IndexPage = ({ data }) => (
  <main className="view">
    <Cover
      data={{
        about: data.allContentfulAbout.edges[0].node.body.childMarkdownRemark.html,
        navigation: data.allContentfulLinks.edges
      }}
    />
  </main>
);

export default IndexPage;

export const indexPageQuery = graphql`
  query indexPageQuery {
    allContentfulAbout {
      edges {
        node {
          body {
            childMarkdownRemark {
              html
            }
          }
        }
      }
    }
    allContentfulLinks {
      edges {
        node {
          id
          display
          url
        }
      }
    }
  }
`;
