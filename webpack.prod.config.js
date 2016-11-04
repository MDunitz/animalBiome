const path = require('path');
const webpack = require('webpack');

module.exports = {

  devtool: 'source-map',

  entry: [ 
    './src/index'
  ],

  output: {
    path: path.join(__dirname, 'public'),
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
      // { test: /\.png$/,
      //   loader: 'file' },
      { test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
        loader: 'file'},
      { test: /\.css$/,
        loaders: ['style', 'css']},
      { test: /\.png$/, 
        loader: 'url?limit=10000!img?progressive=true' }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  }
};
