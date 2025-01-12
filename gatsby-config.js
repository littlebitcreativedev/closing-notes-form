/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Closing Notes`,
    siteUrl: `https://www.yourdomain.tld`,
    description: `This site provides a form to input data gathered from the day's work.`,
    author: `@littlebitcreativedev`
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Closing Notes`,
        start_url: `/`,
        icon: `images/favicon-32x32.png`
      }
    },
    'gatsby-plugin-postcss',
    '@skagami/gatsby-plugin-dark-mode',
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
  ],
}
