var path = require('path');
var webpack = require('webpack');
var merge = require('webpack-merge');
var FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');
var webpackBaseConfig = require('./webpack.base.config');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var OpenBrowserPlugin = require('open-browser-webpack-plugin');

var devConfig = {
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development'),
      mode: JSON.stringify('development'),
    }),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new FriendlyErrorsPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.join(__dirname, '../index.html'),
      cache: false,
      inject: true,
      favicon: '',
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true,
        // more options:
        // https://github.com/kangax/html-minifier#options-quick-reference
      },
    }),
    new OpenBrowserPlugin({ url: 'http://localhost:2000/index.html' })
  ],
  devServer: {
    port: 2000,
    hot: true,
    inline: true,
    historyApiFallback: true,
    // 去掉不必要的输出信息
    clientLogLevel: "none",
    overlay: {
      warnings: false,
      errors: true,
    },
    contentBase: path.resolve(__dirname, '../src'),
  },
  devtool: 'source-map',
};

module.exports = merge(webpackBaseConfig, devConfig);
