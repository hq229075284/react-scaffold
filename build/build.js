var rm = require('rimraf')
var ora = require('ora')
var path = require('path')
var webpack = require('webpack')
var webpackConfig = require('./webpack.prod.config')

var spinner = ora('打包中...')
spinner.start()

rm(path.join(__dirname, '../dist'), function (err) {
  if (err) { throw err }
  webpack(webpackConfig, function (err, stats) {
    spinner.stop()
    if (err) { throw err }
    process.stdout.write(stats.toString({
      colors: true,
      modules: false,
      children: false,
      chunks: false,
      chunkModules: false
    }) + '\n\n')
  })
})