import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
export default ({ data }) => {
  const post = data.markdownRemark;
  const metadata = data.metadata;
  return (
    <Layout>
        <div class = "container">
            <article class="{post.frontmatter.section}">
                <h1 class="article-title">{post.frontmatter.title}</h1>
                    {post.frontmatter.authors.map(author=>(
                        <a href="" class="no-decoration"> <h2 class="article-author"> {author}</h2></a>
                    ))}
                {
                    post.frontmatter.images[0] &&
                    post.frontmatter.images.map(image => (
                        <figure>
                            <img src={data.metadata.siteMetadata.mediaUrl+image} className="header-image img-responsive" alt="Main Image" />
                        </figure>
                    ))
                }
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
    },
    metadata: site {
        siteMetadata {
            mediaUrl
        }
    }
  }
`