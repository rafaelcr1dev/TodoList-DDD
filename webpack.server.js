const path = require("path");
const nodeExternals = require('webpack-node-externals');

/*
Webpack

Test
npx webpack --config webpack.server.js --watch
npx nodemon dist/bundle_server.js
*/

module.exports = {
  entry: './server.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle_server.js'
  },
  devServer: {
    static: './dist',
  },
  target: 'node',
  module: {
    rules: [{
      test: /.js/,
      use: 'babel-loader'
    }]
  },
  externals: [
    nodeExternals()
  ]
}