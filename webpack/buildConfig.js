// @flow

import path from 'path'
import mapValues from 'lodash/mapValues'
import dotenv from 'dotenv'
import merge from 'webpack-merge'
import webpack from 'webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin'

const readDotenvConfigFromContext = (context: string): Object =>
  dotenv.config(context)

export default (context: string, config: Object, environmentVars: Object = {}): Object =>
  merge(
    {
      context,
      output: {
        path: path.join(context, 'dist'),
        publicPath: '/',
      },
      resolve: {
        modulesDirectories: ['src', 'node_modules'],
        extensions: ['', '.js'],
      },
      module: {
        loaders: [
          {
            test: /\.js$/,
            loader: 'babel-loader',
            include: /src/,
          },
        ],
      },
      plugins: [
        new webpack.DefinePlugin(mapValues({
          ...environmentVars,
          ...readDotenvConfigFromContext(context),
        }, (value) => JSON.stringify(value))),
        new HtmlWebpackPlugin({
          inject: 'body',
          template: 'src/index.html',
        }),
        new webpack.optimize.OccurenceOrderPlugin(),
      ],
    },
    config
  )
