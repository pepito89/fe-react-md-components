const nodeExternals = require('webpack-node-externals');

const path = require('path');

module.exports = {
  entry: './src/lib/index.js',
  externals: [nodeExternals()],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },
  /*
  resolve: {
    extensions: ['*', '.js','.jsx']
  },
  */
  output: {
    path: path.resolve(__dirname, './dist/lib'),
    filename: 'index.js',
    library: '',
    libraryTarget: 'commonjs'
  },
  /*
  devServer: {
    contentBase: './dist'
  }
  */
};
