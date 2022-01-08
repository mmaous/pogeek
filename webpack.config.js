const path = require('path')
const { webpack } = require('webpack')

const config = (env, argv) => {

  return {
    entry: ['@babel/polyfill', './src/index.js'],
    output: {
      path: path.resolve(__dirname, 'build'),
      filename: 'main.js',
    },
    devServer: {
      static: path.resolve(__dirname, 'build'),
      compress: true,
      port: 1337,
      hot: true,
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
          },
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader'],
        },
      ],
    },
    resolve: {

    extensions: ['.jsx', '.js']
  },
    devtool: 'source-map',
  }
}

module.exports = config
