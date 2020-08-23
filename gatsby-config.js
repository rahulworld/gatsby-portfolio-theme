const path = require(`path`)
module.exports = {
  siteMetadata: {
    title: `Rahul Chauhan`,
    description: `Data Scientist & Full Stack Developer, CSE @ NIT SRINAGAR, Google Summer of Code 2017 and 2018, OSGeo GSoC Admin 2020, OSGeo GSoC Admin 2019 and OSGeo GSoC Mentor 2018`,
    author: `@rahulworld`,
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
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `images`),
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `rahulworld`,
        short_name: `rahulworld`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/rahulworld.jpeg`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
