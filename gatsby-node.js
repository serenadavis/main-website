const path = require('path')

exports.createPages = ({ boundActionCreators, graphql }) => {
  const { createPage } = boundActionCreators

  const postTemplate = path.resolve('src/templates/article.js')

  return graphql(`
  {
    all: allMarkdownRemark {
      edges {
        node {
          excerpt
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
    }
  }
    `).then(res => {
    if (res.errors) {
      return Promise.reject(res.errors)
    }

    res.data.all.edges.forEach(({ node }) => {
      createPage({
        path: 'content/'+node.frontmatter.slug,
        component: postTemplate,
        context: { slug: node.frontmatter.slug}
      })
    })
  })
}
