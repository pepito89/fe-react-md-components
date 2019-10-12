const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const nodeExternals = require('webpack-node-externals');

module.exports = merge(common, {
  entry: './src/lib/index.js',
  externals: [nodeExternals()],
  output: {
    library: '',
    libraryTarget: 'commonjs',
  },
  mode: 'production'
});
