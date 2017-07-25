var path = require('path');
var friendlyFormatter = require('eslint-friendly-formatter');

var webpackConfig = {
  entry: {
    main: path.join(__dirname, '../src/index.js')
  },
  output: {
    path: path.join(__dirname, '../dist'),
    filename: '[name].[hash:7].js',
    chunkFilename: 'chunks/[name].[chunkhash:7].js'
  },
  module: {
    rules: [
      /* {
        test: /\.(js|jsx)$/,
        use: [
          {
            loader: 'eslint',
            options: {
              formatter: friendlyFormatter, // 编译后错误报告格式
            }
          }
        ],
        enforce: 'pre',
        include: path.join(__dirname, '../src')
      }, */ {
        test: /\.(js|jsx)$/,
        use: ['babel'],
        exclude: /node_modules/,
        // include: path.join(__dirname, '../src'),
      }, {
        test: /\.css$/,
        // exclude: /(node_modules|bower_components)/,
        use: [
          {
            loader: 'style-loader'
          }, {
            loader: 'css-loader'
          }, {
            loader: 'postcss-loader'
          }
        ]
      }, {
        test: /\.less$/,
        exclude: /(node_modules|bower_components)/,
        use: [
          {
            loader: 'style-loader'
          }, {
            loader: 'css-loader'
          }, {
            loader: 'postcss-loader'
          }, {
            loader: 'less-loader',
            options: {
              sourceMap: true
            }
          }
        ]
      }, {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url',
        options: {
          limit: 10000,
          name: 'img/[name].[hash:7].[ext]'
        }
      }, {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url',
        options: {
          limit: 10000,
          name: 'font/[name].[hash:7].[ext]'
        }
      }
    ]
  },
  resolveLoader: {
    moduleExtensions: ['-loader']
  },
  resolve: {
    extensions: [
      '.js', '.jsx', '.vue'
    ],
    alias: {
      components: path.join(__dirname, '../src/components'),
      style: path.join(__dirname, '../src/style'),
      utils: path.join(__dirname, '../src/utils'),
      reduxs: path.join(__dirname, '../src/reduxs'),
      pages: path.join(__dirname, '../src/pages'),
    }
  }
};

module.exports = webpackConfig;
