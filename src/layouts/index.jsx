import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import Footer from "../components/footer"

import "../styles/styles.scss"

const TemplateWrapper = ({ children, data }) => (
  <div>
    <Helmet>
      <title>{data.site.siteMetadata.title}</title>
      <meta description={data.site.siteMetadata.description} />
      <link rel="canonical" href={data.site.siteMetadata.siteUrl} />
      <meta keywords={data.site.siteMetadata.keywords} />
      <meta charSet="utf-8" />
      <meta property="og:url" content={data.site.siteMetadata.siteUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={data.site.siteMetadata.title} />
      <meta
        property="og:description"
        content={data.site.siteMetadata.description}
      />
      <meta property="og:image" content={data.site.siteMetadata.cover} />
      <meta property="fb:app_id" content={data.site.siteMetadata.fb} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={data.site.siteMetadata.twitter} />
      <meta name="twitter:creator" content={data.site.siteMetadata.twitter} />
      <meta name="twitter:title" content={data.site.siteMetadata.title} />
      <meta
        name="twitter:description"
        content={data.site.siteMetadata.description}
      />
      <meta name="twitter:image" content={data.site.siteMetadata.cover} />
    </Helmet>
    {children()}
    <Footer />
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func.isRequired,
  data: PropTypes.shape.isRequired
}

export const query = graphql`
  query AboutQuery {
    site {
      siteMetadata {
        title
        description
        siteUrl
        keywords
        cover
        twitter
        fb
      }
    }
  }
`

export default TemplateWrapper
