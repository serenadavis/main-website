import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
export default ({ data }) => {
  const post = data.markdownRemark
  return (
    <Layout>
        <div class = "container">
            <article class="{post.frontmatter.section}">
                <h1 class="article-title">{post.frontmatter.title}</h1>
                    <a href="" class="no-decoration"> <h2 class="article-author"> {post.frontmatter.authors[0]}</h2></a>
                <div dangerouslySetInnerHTML={{ __html: post.html }} />
            </article>
        </div>
    </Layout>
  )
}
export const query = graphql`
query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        authors
        images
        section
        issue
        year
        slug
      }
    }
  }
`