const path = require("path");
const webpack = require('webpack');
const LiveReloadPlugin = require('webpack-livereload-plugin');

module.exports = {
  mode: 'development',
  entry: './src/frontend/index.js',
  output: {
    path: path.resolve(__dirname, 'dist/public'),
    filename: 'bundle_client.js',
    clean: true
  },
  module: {
    rules: [{
      test: /.js/,
      use: 'babel-loader'
    }]
  },
  plugins: [
    new LiveReloadPlugin()
  ]
}