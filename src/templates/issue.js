import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { Link } from "gatsby"

function convertToSlug(Text)
{
    return Text
        .toLowerCase()
        .replace(/ /g,'-')
        .replace(/[^\w-]+/g,'')
        ;
}

export default ({ data }) => {
  return (
    <Layout>
        <div class="container">
            <h1 class="header"> {data.fiction.edges[0].node.frontmatter.issue_full_name} </h1>
            <div class = "row">
                <div class="col-sm-6">
                    {/* <H2 class="subheader"> Buy this issue <u><Link to="/shop">here</Link></u></H2> */}
                    <figure>
                        <a href="{% url 'shop' %}">
                            <img class='img-responsive' alt="" style={{margin: "0 auto"}} src={"https://harvard-advocate.s3.amazonaws.com/covers/"+convertToSlug(data.fiction.edges[0].node.frontmatter.issue_full_name)}/>
                        </a>
                    </figure>
                </div>
                <div class="col-sm-6">
                    <h2 class="subheader no_padding">Fiction</h2>
                    <hr class="subheader-border"></hr>
                    {data.fiction.edges.map(edge => (
                        <div class="section-article">
                        <p class="name"><Link to={"/content/"+edge.node.frontmatter.slug}>{edge.node.frontmatter.title}</Link> -
                        {edge.node.frontmatter.authors.map(author => (
                            <Link to={"contributor/" + convertToSlug(author)} class="author no-decoration">  {author}</Link>
                        ))}
                        </p>
                        </div>
                    ))}

                    <h2 class="subheader no_padding">Features</h2>
                    <hr class="subheader-border"></hr>
                    {data.features.edges.map(edge => (
                        <div class="section-article">
                        <p class="name"><Link to={"/content/"+edge.node.frontmatter.slug}>{edge.node.frontmatter.title}</Link> -
                        {edge.node.frontmatter.authors.map(author => (
                            <Link to={"contributor/" + convertToSlug(author)} class="author no-decoration">  {author}</Link>
                        ))}
                        </p>
                        </div>
                    ))}

                    <h2 class="subheader no_padding">Poetry</h2>
                    <hr class="subheader-border"></hr>
                    {data.poetry.edges.map(edge => (
                        <div class="section-article">
                        <p class="name"><Link to={"/content/"+edge.node.frontmatter.slug}>{edge.node.frontmatter.title}</Link> -
                        {edge.node.frontmatter.authors.map(author => (
                            <Link to={"contributor/" + convertToSlug(author)} class="author no-decoration">  {author}</Link>
                        ))}
                        </p>
                        </div>
                    ))}

                    <h2 class="subheader no_padding">Art</h2>
                    <hr class="subheader-border"></hr>
                    {data.art.edges.map(edge => (
                        <div class="section-article">
                        <p class="name"><Link to={"/content/"+edge.node.frontmatter.slug}>{edge.node.frontmatter.title}</Link> -
                        {edge.node.frontmatter.authors.map(author => (
                            <Link to={"contributor/" + convertToSlug(author)} class="author no-decoration">  {author}</Link>
                        ))}
                        </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </Layout>
  )
}
export const query = graphql`
query($issue_full_name: String!) {
    fiction: allMarkdownRemark(filter: {frontmatter: {issue_full_name: {eq: $issue_full_name}, section: {eq: "fiction"}}}) {
        edges {
          node {
            excerpt
            frontmatter {
              title
              authors
              images
              section
              issue_full_name
              slug
            }
          }
        }
      },
      features: allMarkdownRemark(filter: {frontmatter: {issue_full_name: {eq: $issue_full_name}, section: {eq: "features"}}}) {
        edges {
          node {
            excerpt
            frontmatter {
              title
              authors
              images
              section
              slug
              issue_full_name
            }
          }
        }
      },
      poetry: allMarkdownRemark(filter: {frontmatter: {issue_full_name: {eq: $issue_full_name}, section: {eq: "poetry"}}}) {
        edges {
          node {
            excerpt
            frontmatter {
              title
              authors
              images
              section
              slug
              issue_full_name
            }
          }
        }
      },
      art: allMarkdownRemark(filter: {frontmatter: {issue_full_name: {eq: $issue_full_name}, section: {eq: "art"}}}) {
        edges {
          node {
            excerpt
            frontmatter {
              title
              authors
              images
              section
              slug
              issue_full_name
            }
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