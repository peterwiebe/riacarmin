module.exports = {
  siteMetadata: {
    title: `Ria Carmin | Interface Engineer`,
    siteUrl: `http://riacarmin.com`,
    description: `UX Engineer and JavaScript Developer in Vancouver, Canada. I strive to create amazing and memorable experiences for people on the web. I specialize in creating scalable design systems and modular approach. I also love learning and experimenting with all things JavaScript.`,
    keywords: `React, Angular, Preact, GraphQL, developer, designer`,
    cover: `https://images.contentful.com/mjjc4cn5846z/6p5shTWKVaoAoiy2yO04i2/cdc47fe47c42bdaa234a40b6a74cda5a/og_cover.png`,
    twitter: `@riacarmin`,
    fb: `208088706603346`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-google-tagmanager`,
      options: {
        id: `GTM-M9FQPFL`,
        // Include GTM in development.
        // Defaults to false meaning GTM will only be loaded in production.
        includeInDevelopment: false
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Ria Carmin | Interface Engineer`,
        short_name: `Ria Carmin`,
        start_url: `/`,
        background_color: `#ffd2d5`,
        theme_color: `#2e3c99`,
        display: `minimal-ui`,
        icons: [
          {
            src: `/favicons/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`
          },
          {
            src: `/favicons/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`
          }
        ]
      }
    },
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        color: `#2e3c99`,
        showSpinner: true
      }
    },
    {
      resolve: `gatsby-plugin-sitemap`
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `mjjc4cn5846z`,
        accessToken: `91f62d9ecbd1670cfe489be0317d0ecd7abae768494a364aea3894323d6630d0`
      }
    },
    `gatsby-transformer-remark`
  ]
}
