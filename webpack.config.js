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
  resolve: {
    alias: {
      'components': SRC_DIR + '/app/components',
      'containers': SRC_DIR + '/app/containers',
      'libs': SRC_DIR + '/libs',
      'actions': SRC_DIR + '/app/store/actions',
      'reducers': SRC_DIR + '/app/store/reducers'
    }
  },
  module: {
    loaders: [
      {
        test: /\.js$/, include: SRC_DIR, loader: 'babel-loader', query: {presets: ['react','es2015','stage-2']}
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]'
      }
    ]
  },
  plugins:[

  ],
  devServer: {
    port: 12000,
    inline: true,
    hot:true,
    historyApiFallback: true,
    contentBase: SRC_DIR + '/public/'
  },
  devtool: "#inline-source-map"
}
module.exports = config