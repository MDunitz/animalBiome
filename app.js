const Server = require('./server.js')
const port = (process.env.PORT || 8080)
const app = Server.app()

if (process.env.NODE_ENV !== 'production') {

  const webpack = require('webpack')
  const config = require('./webpack.dev.config.js')
  const compiler = webpack(config)


}

app.listen(port)
console.log(`Listening at http://localhost:${port}`)