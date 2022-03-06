import { Helmet } from 'react-helmet'

export const Render = (component: any, styles: any): string => {
  let html = component
  const helmet = Helmet.renderStatic()

  html = html.replace('</head>', `${styles}</head>`)
  html = html.replace(
    '<head>',
    `<head>${helmet.meta.toString()}${helmet.title.toString()}${helmet.link.toString()}`
  )
  return `<!DOCTYPE html>${html}`
}
