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
    // extensions: ['', '.js', '.json'],
    // fallback: [path.join(__dirname, '../node_modules')],
    // fallback: [SRC_DIR],
    alias: {
      // 'vue': 'obigo-js-core-rnbs/dist/vue.common.js',
      // 'obigo-js-ui': 'obigo-js-ui-rnbs',
      // 'src': path.resolve(__dirname, '../src'),
      // 'assets': path.resolve(__dirname, '../src/assets'),
      // 'components': path.resolve(__dirname, '../src/components')
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
        test: /\.js$/, include: SRC_DIR, loader: 'babel-loader', query: {
          presets: ['react','es2015','stage-2']
        }
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
    contentBase: SRC_DIR + '/public/',
  }
}
module.exports = config