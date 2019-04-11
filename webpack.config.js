const path = require('path')

module.exports = {
  context: path.resolve(__dirname, 'src'),
  entry: {
    main: './index.js',
    css: './base.styl'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: '[name].bundle.js'
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
      },
      {
        test: /\.styl$/,
        use: ["style-loader", "css-loader", "stylus-loader"]
      },
    ]
  },
  devServer: {
    contentBase: './dist',
    historyApiFallback: true
  }
}
