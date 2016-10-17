const Server = require('./server.js')
const port = (process.env.PORT || 8080)
const app = Server.app()

if (process.env.NODE_ENV !== 'production') {

  const webpack = require('webpack')
  const webpackDevMiddleware = require('webpack-dev-middleware')
  const webpackHotMiddleware = require('webpack-hot-middleware')
  const config = require('./webpack.dev.config.js')
  const compiler = webpack(config)

  app.use(webpackDevMiddleware(compiler, {
    hot: true,
    filename: 'bundle.js'
    publicPath: config.output.publicPath,
    stats: {
      colors: true
    },
    historyApiFallback: true
  }));
  app.use(webpackHotMiddleware(compiler, {
    log: console.log,
    path:'/__webpack_hmr',
    heartbeat: 10*1000
  }))

}

app.listen(port)
console.log(`Listening at http://localhost:${port}`)