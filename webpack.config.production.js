const webpack = require('webpack');
const path = require('path');

const DIST_DIR = path.resolve(__dirname, './dist');
const SRC_DIR = path.resolve(__dirname, './src');

const config = {
  entry: {
    index: SRC_DIR +'/index.js'
  },
  output: {
    path: DIST_DIR,
    filename: 'index.js'
  },
  resolve: {
    extensions: ['.js'],
    modules: [SRC_DIR]
  },
  module : {
    rules: [
      {
        test: /^((?!\.test\.).)*\.js$/,
        exclude: /node_modules/,
        include : SRC_DIR,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },
  plugins: [],
  stats: {
    children: false
  }
};

module.exports = config;
