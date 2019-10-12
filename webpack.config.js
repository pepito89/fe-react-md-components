const nodeExternals = require('webpack-node-externals');
const path = require('path');

module.exports = {
  entry: './src/lib/index.js',
  externals: [nodeExternals()],
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },
  output: {
    path: path.resolve(__dirname, './dist/lib'),
    filename: 'index.js',
    library: '',
    libraryTarget: 'commonjs'
  }
};
