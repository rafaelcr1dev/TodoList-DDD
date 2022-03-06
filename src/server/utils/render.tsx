export const Render = (component: any, styles: any): string => {
  let html = component
  html = html.replace('</head>', styles)
  return `<!DOCTYPE html>${html}`
}
