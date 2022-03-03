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
        test: /\.ts(x?)$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    alias: {
      '@': path.join(__dirname, 'src')
    }
  },
  plugins: [new LiveReloadPlugin()]
}
