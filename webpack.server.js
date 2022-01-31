const path = require("path");
const nodeExternals = require('webpack-node-externals');

/*
Webpack

Test
npx webpack --config webpack.server.js --watch
npx nodemon dist/bundle_server.js
*/

module.exports = {
  entry: './src/backend/server.tsx',
  devtool: 'inline-source-map',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle_server.js'
  },
  target: 'node',
  module: {
    rules: [
      {
        test: /.js/,
        use: 'babel-loader'
      },
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      }
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  externals: [
    nodeExternals()
  ]
}