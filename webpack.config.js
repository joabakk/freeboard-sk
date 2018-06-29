const webpack = require('webpack');
var nodeExternals = require('webpack-node-externals');

module.exports = {
  entry: './index.js',
  target: 'node', // in order to ignore built-in modules like path, fs, etc.
  externals: [nodeExternals()],
  output: {
    path: __dirname,
    filename: './bundle.js'
  }
};
