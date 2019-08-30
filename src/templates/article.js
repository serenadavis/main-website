import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import Img from "gatsby-image"

function convertToSlug(Text)
{
    return Text
        .toLowerCase()
        .replace(/ /g,'-')
        .replace(/[^\w-]+/g,'')
        ;
}

export default ({ data }) => {
  const post = data.markdownRemark;
  return (
    <Layout>
        <div class = "container">
            <article class="{post.frontmatter.section}">
                <h1 class="article-title">{post.frontmatter.title}</h1>
                    {post.frontmatter.authors.map(author=>(
                        <Link to={"contributor/"+convertToSlug(author)} class="no-decoration"> <h2 class="article-author"> {author}</h2></Link>
                    ))}
                {
                    post.frontmatter.images[0] &&
                    post.frontmatter.images.map(image => (
                        <figure>
                            <Img fluid={data.images.edges[0].node.childImageSharp.fluid} />
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
query($slug: String!, $images: [String]!) {
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
    },
    images: allS3ImageAsset(filter: {Key: {in: $images}}) {
        edges {
            node {
                childImageSharp {
                    fluid {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    }
  }
`