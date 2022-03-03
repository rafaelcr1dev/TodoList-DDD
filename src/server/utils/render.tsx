/* eslint-disable no-unsafe-finally */
import fs from 'fs'

export const Render = (component: any): string => {
  let data

  try {
    data = fs.readFileSync('./public/index.html', 'utf8')
  } catch (err) {
    data = ''
    console.error(err)
  } finally {
    return data.replace(
      '<div id="root"></div>',
      `<div id="root">${component}</div>`
    )
  }
}
