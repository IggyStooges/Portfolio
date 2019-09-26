module.exports = {
    configureWebpack: {
      plugins: [
        new MyAwesomeWebpackPlugin()
      ],
      publicPath: process.env.NODE_ENV === 'production' ?
        '/my-project/' :
        '/'
    }
  }
