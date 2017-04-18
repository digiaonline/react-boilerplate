// @flow

import path from 'path'
import mapValues from 'lodash/mapValues'
import createConfig from './createConfig'
import readDotenv from './readDotenv'
import webpack from 'webpack'
import ExtractTextPlugin from 'extract-text-webpack-plugin'
import CleanPlugin from 'clean-webpack-plugin'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import OfflinePlugin from 'offline-plugin'

const context = path.resolve(__dirname, '..')
const extractStylesPlugin = new ExtractTextPlugin({filename: '[name].[hash].css', ignoreOrder: true})

export default createConfig({
  context,
  devtool: 'source-map',
  entry: [
    'babel-polyfill',
    './src/index.js',
    './src/global.css',
  ],
  output: {
    path: path.join(context, 'dist'),
    publicPath: '/',
    filename: '[name].[hash].js',
    sourceMapFilename: '[file].map',
    chunkFilename: '[id].[hash].js',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        loader: extractStylesPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss-loader',
        }),
      },
    ],
  },
  plugins: [
    new CleanPlugin(['./dist/*'], {root: context}),
    new webpack.DefinePlugin(mapValues({
      ...readDotenv(context),
      ['process.env.NODE_ENV']: 'production',
    }, (v) => JSON.stringify(v))),
    new HtmlWebpackPlugin({
      inject: 'body',
      template: 'src/index.html',
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true,
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
    }),
    extractStylesPlugin,
    new OfflinePlugin({
      AppCache: false,
      publicPath: '/',
      relativePaths: false,
      ServiceWorker: {
        events: true,
      },
    }),
  ],
})
