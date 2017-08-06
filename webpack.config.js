var webpack = require('webpack')
var path = require('path')

var DIST_DIR = path.resolve(__dirname,'dist')
var SRC_DIR = path.resolve(__dirname,'src')

var config = {
  entry: SRC_DIR + '/app/index.js',
  output: {
    path: DIST_DIR + '/app',
    filename: 'bundle.js',
    publicPath: '/public/'
  },
  module: {
    loaders: [
      {
        test: /\.js$/, include: SRC_DIR, loader: 'babel-loader', query: {
          presets: ['react','es2015','stage-2']
        }
      }
    ]
  },
  devServer: {
    port: 12000,
    inline: true,
    hot:true,
    historyApiFallback: true,
    contentBase: SRC_DIR + '/public/',
  },  
}
module.exports = config