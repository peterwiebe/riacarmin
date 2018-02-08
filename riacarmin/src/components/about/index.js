import React from "react";
import style from "./style.module.scss";
import * as PropTypes from "prop-types"
import Navigation from "../navigation";

const propTypes = {
  data: PropTypes.object.isRequired,
}

class About extends React.Component {
  render() {
    const about = this.props.data.allContentfulAbout.node.body.body;
    return (
      <section className={`${style.about} ${style.about__inner}`}>
        {console.log(props)}
        <Navigation />
      </section>
    );
  }
}

export default About;

export const aboutQuery = graphql`
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
`
