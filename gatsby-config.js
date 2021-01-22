/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/static/images`,
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // Add any options here
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: "gatsby-plugin-zopfli",
      options: {
        extensions: ["css", "html", "js", "svg"],
        verbose: true,
        compression: {
          numiterations: 10,
        },
      },
    },
    // {
    //   resolve: "gatsby-plugin-webpack-bundle-analyser-v2",
    //   options: {
    //     devMode: true,
    //   },
    // },
  ],
}
