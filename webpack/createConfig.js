import merge from 'webpack-merge'
import common from './config'

export default (config) => merge(common, config)
