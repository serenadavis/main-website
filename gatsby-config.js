/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: `The Harvard Advocate`,
    description: `The Harvard Advocate, founded in 1866, is the oldest continuously published collegiate literary magazine in the USA.`,
    author: `Daniel Inge`,
    mediaUrl: `https://advo-media.s3.amazonaws.com/media/`
  },
  plugins: [
    `gatsby-transformer-remark`,
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages/content`,
        name: 'content',
      }
    },
  ]
}
