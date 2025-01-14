exports.onCreatePage = ({ page, actions }) => {
  const { createPage } = actions

  if (page.path === '/success/') {
    page.matchPath = '/success/*'
    createPage(page)
  }
}