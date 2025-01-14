exports.onCreatePage = ({ page, actions }) => {
  const { createPage } = actions

  if (page.path === '/success/') {
    page.matchPath = '/success/*'
    createPage(page)
  }
}

exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
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
}