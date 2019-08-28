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


export default ({ data, pageContext}) => {
  return (
    <Layout>
      <div class = "container">
          <h1 class="article-title">{pageContext.author.toUpperCase()}</h1>
          <div class="section-article">
            {data.articles.edges.map(edge => (
              <p class="name"><Link to={"content/"+convertToSlug(edge.node.frontmatter.title)}>{edge.node.frontmatter.title}</Link> <p class="issue">{edge.node.frontmatter.issue_full_name}</p> </p>
            ))}
          </div>
          {/* {% for article in article.contributors.all %}
                <h2 class="article-author"> {{ article.name }}</h2>
          {% endfor %}
          
          {% for article  in articles%}

            <p class="name"><a href="{{ article.get_absolute_url }}">{{article.title}}</a> <p class="issue">{{article.issue}} </p> </p>

            {% endfor %} */}
        </div>
    </Layout>
  )
}
export const query = graphql`
query($author: String!) {
  articles: allMarkdownRemark(filter: {frontmatter: {authors: {in: [$author]}}}) {
    edges {
      node {
        frontmatter {
          title
          authors
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