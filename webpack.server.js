const path = require('path')
const nodeExternals = require('webpack-node-externals')

/*
Webpack

Test
npx webpack --config webpack.server.js --watch
npx nodemon dist/bundle_server.js
*/

module.exports = {
  entry: './src/server/index.tsx',
  devtool: 'inline-source-map',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle_server.js'
  },
  target: 'node',
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
  externals: [nodeExternals()]
}
