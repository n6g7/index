const path = require('path')

module.exports = {
  context: path.resolve(__dirname, 'src'),
  entry: './index.js',
  mode: process.env.NODE_ENV,
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          'babel-loader'
        ]
      },
      {
        test: /\.styl(us)?$/,
        exclude: /node_modules/,
        use: [
          'style-loader',
          'css-loader',
          'stylus-loader'
        ]
      },
      {
        test: /\.ya?ml$/,
        exclude: /node_modules/,
        use: [
          'json-loader',
          'yaml-loader'
        ]
      },
      {
        test: /\.(png|svg)$/,
        exclude: /node_modules/,
        use: [
          'url-loader',
          'img-loader'
        ]
      }
    ]
  },
  devServer: {
    contentBase: './dist',
    historyApiFallback: true
  }
}
