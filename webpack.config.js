const path = require("path");
const nodeExternals = require('webpack-node-externals');

/*
Webpack

Test
npx webpack --config webpack.server.js --watch
npx nodemon dist/bundle_server.js
*/

module.exports = {
  entry: './src/frontend/index.js',
  output: {
    path: path.resolve(__dirname, 'dist/public'),
    filename: 'bundle_client.js'
  },
  module: {
    rules: [{
      test: /.js/,
      use: 'babel-loader'
    }]
  }
}