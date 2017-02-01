import path from 'path'
import createConfig from './createConfig'
import webpack from 'webpack'
import ExtractTextPlugin from 'extract-text-webpack-plugin'
import CleanPlugin from 'clean-webpack-plugin'
import OfflinePlugin from 'offline-plugin'

const context = path.resolve(__dirname, '..')
const extractStylesPlugin = new ExtractTextPlugin({
  filename: '[name].[hash].css',
})

export default
  createConfig(
    context,
    {
      devtool: 'source-map',
      entry: [
        'babel-polyfill',
        './src/index.js',
      ],
      output: {
        filename: '[name].[hash].js',
        sourceMapFilename: '[file].map',
        chunkFilename: '[id].[hash].js',
      },
      module: {
        rules: [
          {
            test: /\.css$/,
            loader: extractStylesPlugin.extract({
              fallbackLoader: 'style-loader',
              loader: 'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]',
            }),
            include: /src/,
          },
        ],
      },
      plugins: [
        new CleanPlugin(['./dist'], {root: context}),
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
    },
    {
      ['process.env.NODE_ENV']: 'production',
    }
  )
