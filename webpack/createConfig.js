import path from 'path'
import mapValues from 'lodash/mapValues'
import dotenv from 'dotenv'
import merge from 'webpack-merge'
import webpack from 'webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin'

const readDotenvConfigFromContext = (context) =>
  dotenv.config(context)

const createCommonConfig = (context, environmentVars) => ({
  context,
  output: {
    path: path.join(context, 'dist'),
    publicPath: '/',
  },
  resolve: {
    modules: ['src', 'node_modules'],
    extensions: ['.js'],
  },
  module: {
    rules: [
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
  ],
})

export default (context, config, environmentVars = {}) =>
  merge(createCommonConfig(context, environmentVars), config)
