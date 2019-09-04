import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import Image from "../components/image"

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
                            <Image name={image}/>
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
    }
  }
`