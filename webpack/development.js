// @flow

import path from 'path'
import buildConfig from './buildConfig'
import webpack from 'webpack'
import DashboardPlugin from 'webpack-dashboard/plugin'

const context = path.resolve(__dirname, '..')

export default
  buildConfig(
    context,
    {
      devtool: 'eval',
      entry: [
        'react-hot-loader/patch',
        'babel-polyfill',
        './src/index.js',
        './src/index.css',
      ],
      output: {
        filename: '[name].js',
        sourceMapFilename: '[file].map',
        chunkFilename: '[id].js',
      },
      module: {
        loaders: [
          {
            test: /\.css$/,
            loader: 'style-loader!css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]',
            include: /src/,
          },
        ],
      },
      plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        new DashboardPlugin(),
      ],
      devServer: {
        hot: true,
        host: '0.0.0.0',
        historyApiFallback: true,
        quiet: true,
        inline: true,
        stats: false,
        watchOptions: {
          poll: 1000,
          ignored: /node_modules/,
        },
      },
    },
    {
      ['process.env.NODE_ENV']: 'development',
    }
  )
