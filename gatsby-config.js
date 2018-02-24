module.exports = {
  siteMetadata: {
    title: `Ria Carmin | Interface Engineer`,
    siteUrl: `http://www.riacarmin.com`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-google-tagmanager`,
      options: {
        id: "GTM-M9FQPFL",
        // Include GTM in development.
        // Defaults to false meaning GTM will only be loaded in production.
        includeInDevelopment: false
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Ria Carmin | Interface Engineer",
        short_name: "Ria Carmin",
        start_url: "/",
        background_color: "#ffd2d5",
        theme_color: "#2e3c99",
        display: "minimal-ui",
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
};
