import React from "react"
import Layout from "../components/layout"
import FeaturedArticlesComponent from "../components/featured_articles"
import { graphql } from "gatsby"

export const query = graphql`
{
    allMarkdownRemark(filter: {frontmatter: {section: {eq: "features"}}}, limit: 5) {
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
    }
}
`

export default ({data}) => (
    <Layout>
        <FeaturedArticlesComponent data={data}/>
    </Layout>
)