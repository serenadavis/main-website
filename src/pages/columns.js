import React from "react"
import Layout from "../components/layout"
import FeaturedArticlesComponent from "../components/featured_articles"
import { graphql } from "gatsby"

export const query = graphql`
{
    allMarkdownRemark(filter: {frontmatter: {section: {eq: "columns"}}}, limit: 5) {
      edges {
        node {
          frontmatter {
            title
            authors
            slug
            section
          }
          excerpt(pruneLength: 2000)
        }
      }
    },
    metadata: site {
      siteMetadata {
          mediaUrl
      }
  }
}
`

export default ({data}) => (
  <Layout>
      <FeaturedArticlesComponent data={data} metadata={data.metadata}/>
  </Layout>
)