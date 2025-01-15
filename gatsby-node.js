// gatsby-node.js
/**exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  if (stage === "build-html" || stage === "develop-html") {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /\.js$/,
            exclude: /node_modules/,
            use: loaders.null(),
          },
        ],
      },
    })
  }
}*/

// gatsby-node.js
exports.onCreatePage = ({ page, actions }) => {
  const { createPage } = actions
  if (page.path === '/success') {
      page.matchPath = '/success/*'
      createPage({
          ...page,
          context: {
              ...page.context,
              clientOnly: true
          }
      })
  }
}