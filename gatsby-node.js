const path = require("path")

exports.createPages = ({ boundActionCreators, graphql }) => {
  const { createPage } = boundActionCreators

  const episodeTemplate = path.resolve("src/templates/episode.js")

  return graphql(`
    {
      allMarkdownRemark(filter: { frontmatter: { title: { ne: "" } } }) {
        edges {
          node {
            frontmatter {
              path
            }
          }
        }
      }
    }
  `).then(res => {
    if (res.errors) {
      return Promise.reject(res.errors)
    }
    res.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: node.frontmatter.path,
        component: episodeTemplate,
      })
    })
  })
}
