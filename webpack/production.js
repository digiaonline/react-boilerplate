// @flow

import path from 'path'
import buildConfig from './buildConfig'
import webpack from 'webpack'
import ExtractTextPlugin from 'extract-text-webpack-plugin'
import CleanPlugin from 'webpack-clean-plugin'

const context = path.resolve(__dirname, '..')
const extractStylesPlugin = new ExtractTextPlugin('[name].[hash].css')

export default
  buildConfig(
    context,
    {
      devtool: 'source-map',
      entry: [
        'babel-polyfill',
        './src/index.js',
        './src/index.css',
      ],
      output: {
        filename: '[name].[hash].js',
        sourceMapFilename: '[file].map',
        chunkFilename: '[id].[hash].js',
      },
      module: {
        loaders: [
          {
            test: /\.css$/,
            loader: extractStylesPlugin.extract(
              'style-loader',
              'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]'
            ),
            include: /src/,
          },
        ],
      },
      plugins: [
        new CleanPlugin(['./dist'], {root: context}),
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.UglifyJsPlugin({
          compressor: {
            warnings: false,
          },
        }),
        extractStylesPlugin,
      ],
    },
    {
      ['process.env.NODE_ENV']: 'production',
    }
  )
