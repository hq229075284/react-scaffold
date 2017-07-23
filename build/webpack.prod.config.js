var path = require('path');
var webpack = require('webpack');
var merge = require('webpack-merge');
var FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');
var webpackBaseConfig = require('./webpack.base.config');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
var OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin');
var ManifestPlugin = require('webpack-manifest-plugin');

var devConfig = {
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
      mode: JSON.stringify('production'),
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
      },
      sourceMap: true,
    }),
    new OptimizeCSSPlugin({
      cssProcessorOptions: {
        safe: true,
      },
    }),
    new webpack.NoEmitOnErrorsPlugin(),
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
    new BundleAnalyzerPlugin({
      analyzerPort: 8090
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks(module, count) {
        // any required modules inside node_modules are extracted to vendor
        return (
          module.resource &&
          /\.js$/.test(module.resource) &&
          module.resource.indexOf(path.join(__dirname, '../node_modules')) === 0
        );
      },
    }),
    // extract webpack runtime and module manifest to its own file in order to
    // prevent vendor hash from being updated whenever app bundle is updated
    // new webpack.optimize.CommonsChunkPlugin({
    //   name: "manifest",
    //   chunks: ["vendor"]
    // })
    new ManifestPlugin({
      fileName: 'manifest.json',
      basePath: '',
      seed: {
        name: 'My Manifest cache',
        'short_name': 'mm',
        "display": "standalone",
        "orientation": "portrait",
        "start_url": "index.html?launcher=true"
      }
    })
  ],
  devtool: 'source-map',
};

module.exports = merge(webpackBaseConfig, devConfig);
