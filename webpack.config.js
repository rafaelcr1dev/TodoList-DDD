const path = require('path')
const LiveReloadPlugin = require('webpack-livereload-plugin')

module.exports = {
  mode: 'development',
  entry: './src/frontend/main/index.tsx',
  devtool: 'inline-source-map',
  output: {
    path: path.resolve(__dirname, 'dist/public'),
    filename: 'bundle_client.js',
    clean: true
  },
  module: {
    rules: [
      {
        test: /.js/,
        use: 'babel-loader'
      },
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  },
  plugins: [new LiveReloadPlugin()]
}
