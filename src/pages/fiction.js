import React from 'react'
import Layout from '../components/layout'
import { Link } from "gatsby"

export default ({data }) => {

return (
  <Layout>
    <h3 class="section-title">
    Featured fiction
    </h3>
    <div class="features fiction-page">
    <ul class="featured-item-links">
        {data.allMarkdownRemark.edges.map(post => (
            <li class="selected" data-item-id="post.node.frontmatter.slug">
            <span class="item-title">{post.node.frontmatter.title}</span>
            <span class="item-author">
                By {post.node.frontmatter.authors.map(author => (
                    author
                ))}
                </span>
                <span class="title-underline"></span></li>
        ))}
    </ul>
    {data.allMarkdownRemark.edges.map(post => (
    <div class="item featured-item {% if forloop.first %} selected {% endif %}" data-item-id="{{ article.id }}">
        <span class="item-title"><Link to={"/content/"+post.node.frontmatter.slug}>{post.node.frontmatter.title}</Link></span>
        <span class="item-author">By {post.node.frontmatter.authors.map(author => (
            <a href="">{author}</a>
        ))}</span>
        <span class="title-underline"></span>
        {/* <div class="item-sample">{% if article.photo %}<a href="{% url 'content' article.id %}"><img src="{{ MEDIA_URL }}{{article.photo}}" /></a>{% else %}{% autoescape off %}{{ article.body }}{% endautoescape %}{% endif %}</div> */}
        <div class="item-sample">{post.node.excerpt}</div>
        <div class="shadow"></div>
        {/* <div class="item-continue-reading"><a href="{% url 'content' article.id %}">{% if section == "art" %} See More >> {% else %} Continue Reading >> {% endif %}</a></div> */}
        </div>
    ))}
    </div>
  </Layout>
)
}

export const pieceQuery = graphql`
{
    allMarkdownRemark(filter: {frontmatter: {section: {eq: "fiction"}}}, limit: 5) {
      edges {
        node {
          frontmatter {
            title
            authors
            slug
          }
          excerpt(pruneLength: 2000)
        }
      }
    }
  }
`