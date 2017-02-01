import path from 'path'
import createConfig from './createConfig'
import webpack from 'webpack'
import DashboardPlugin from 'webpack-dashboard/plugin'

const context = path.resolve(__dirname, '..')

export default
  createConfig(
    context,
    {
      devtool: 'eval',
      entry: [
        'react-hot-loader/patch',
        'babel-polyfill',
        './src/index.js',
      ],
      output: {
        filename: '[name].js',
        sourceMapFilename: '[file].map',
        chunkFilename: '[id].js',
      },
      module: {
        rules: [
          {
            test: /\.css$/,
            use: [
              'style-loader',
              'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]',
            ],
            include: /src/,
          },
        ],
      },
      plugins: [
        new webpack.LoaderOptionsPlugin({
          debug: true,
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        new DashboardPlugin(),
      ],
      devServer: {
        hot: true,
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
