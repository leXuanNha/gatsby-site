module.exports = {
  siteMetadata: {
    title: `TekTee Zone - Áo thun cho developer`,
    description: `Những chiếc áo xịn xò và đầy ắp thông điệp của dev, mang lại cảm giác vui vẻ cả ngày và hào hứng cho mọi người biết bạn là một developer chân chính.`,
    author: `@TekTeeZone`,
    keywords: `ao thun, áo thun, developer, it, tektee, tektee zone, lập trình viên`,
    siteUrl: 'https://tekteezone.com',
    image: '/images/metaImage.png',
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        // background_color: `#663399`,
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-airtable`,
      options: {
        apiKey: `keyTJm4V5i1tprmMb`,
        tables: [
          {
            baseId: `appKeThV2yFTVBxZj`,
            tableName: `Tshirt`,
          },
          // We can add other bases/tables here, too!
          //{
          //baseId: `AIRTABLE_BASE_ID`,
          //tableName: `Sides`
          //}
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-XXXXXXXXX-X',
      },
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        policy: [{ userAgent: '*', allow: '/' }],
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-facebook-pixel`,
      options: {
        pixelId: '1012765739076735',
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
