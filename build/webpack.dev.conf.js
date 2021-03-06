var utils = require('./utils')
var webpack = require('webpack')
var config = require('../config')
var merge = require('webpack-merge')
var baseWebpackConfig = require('./webpack.base.conf')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')

// add hot-reload related code to entry chunks
Object.keys(baseWebpackConfig.entry).forEach(function (name) {
  baseWebpackConfig.entry[name] = ['./build/dev-client'].concat(baseWebpackConfig.entry[name])
})

module.exports = merge(baseWebpackConfig, {
  module: {
    rules: utils.styleLoaders({ sourceMap: config.dev.cssSourceMap })
  },
  // cheap-module-eval-source-map is faster for development
  devtool: '#cheap-module-eval-source-map',
  plugins: [
    new webpack.DefinePlugin({
      'process.env': config.dev.env
    }),
    // https://github.com/glenjamin/webpack-hot-middleware#installation--usage
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    // https://github.com/ampedandwired/html-webpack-plugin
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      inject: true,
      chunks: ['app']
    }),
    new HtmlWebpackPlugin({
      filename: 'sort.html',
      template: 'sort.html',
      inject: true,
      chunks: ['app2']
    }),
    new HtmlWebpackPlugin({
      filename: 'course.html',
      template: 'course.html',
      inject: true,
      chunks: ['app3']
    }),
    new HtmlWebpackPlugin({
      filename: 'section.html',
      template: 'section.html',
      inject: true,
      chunks: ['app4']
    }),
    new HtmlWebpackPlugin({
      filename: 'backer.html',
      template: 'backer.html',
      inject: true,
      chunks: ['app5']
    }),
    new FriendlyErrorsPlugin()
  ]
})
