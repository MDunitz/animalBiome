const path = require('path');
const webpack = require('webpack');

module.exports = {
  context: path.join(__dirname, 'js'),

  devtool: 'source-map',

  entry: [ 
    'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000',
    './src/index.js'
  ],

  output: {
    path: path.join(__dirname, 'www'),
    publicPath: '/public/',
    filename: 'bundle.js'
  },

  plugins: [
  new webpack.optimize.UglifyJsPlugin({
    minimize: true,
    compress: {
      warnings: false
    }
  }),
  new webpack.optimize.OccurenceOrderPlugin(),
  new webpack.optimize.HotModuleReplacementPlugin(),
  new webpack.NoErrorsPlugin(),
  new webpack.DefinePlugin({
    'process.env':{
      'NODE_ENV':JSON.stringify('production')
    }
  })
  ],

  module: {
    loaders: [
      { test: /\.js?$/,
        loader: 'babel',
        include: path.join(__dirname, 'src') },
      { test: /\.scss?$/,
        loader: 'style!css!sass',
        include: path.join(__dirname, 'src', 'styles') },
      { test: /\.png$/,
        loader: 'file' },
      { test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
        loader: 'file'}
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  }
};
