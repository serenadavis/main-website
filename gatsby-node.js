const path = require('path')

function convertToSlug(Text)
{
    return Text
        .toLowerCase()
        .replace(/ /g,'-')
        .replace(/[^\w-]+/g,'')
        ;
}

exports.createPages = ({ boundActionCreators, graphql }) => {
  const { createPage } = boundActionCreators

  const postTemplate = path.resolve('src/templates/article.js')
  const issueTemplate = path.resolve('src/templates/issue.js')
  const contributorTemplate = path.resolve('src/templates/contributor.js')

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
    },
    issue_names: allMarkdownRemark {
        distinct(field: frontmatter___issue_full_name)
    },
    authors: allMarkdownRemark {
        distinct(field: frontmatter___authors)
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

    res.data.issue_names.distinct.forEach( issue_name  => {
        createPage({
            path: 'issue/'+convertToSlug(issue_name),
            component: issueTemplate,
            context: { issue_full_name: issue_name}
          })
    })

    res.data.authors.distinct.forEach( author  => {
        createPage({
            path: 'contributor/'+convertToSlug(author),
            component: contributorTemplate,
            context: { author: author}
          })
    })
  })
}
