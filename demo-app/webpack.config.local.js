const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const DIST_DIR = path.resolve(__dirname, './dist');
const SRC_DIR = path.resolve(__dirname, './src');
const MODULES_DIR = path.resolve(__dirname, './node_modules');
const PORT = 8080;

const config = {
  devtool: 'source-map',
  devServer: {
    port: PORT,
    historyApiFallback: true,
    quiet: false,
    noInfo: false,
    stats: {
      assets: false,
      colors: true,
      version: false,
      hash: false,
      timings: true,
      chunks: false,
      chunkModules: false,
      children: false
    }
  },
  entry: {
    index: SRC_DIR +'/index.js'
  },
  output: {
    path: DIST_DIR,
    filename: '[name].js'
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    modules: [SRC_DIR, MODULES_DIR]
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
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"local"'
    }),
    new HtmlWebpackPlugin({
      template: 'src/index.local.html'
    }),
  ],
  stats: {
    children: false
  }
};

module.exports = config;
