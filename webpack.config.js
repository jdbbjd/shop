var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
  entry: './entry.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'my-first-webpack.bundle.js'
  },
  module:{
     rules: [
      {test: /\.js$/,
          exclude: /(node_modules|bower_components)/,
          loader: 'babel-loader',
          query: { presets: ['es2015', 'react']}
      },
      {
        test: /\.css$/,
        use: [
              'style-loader',
              {
                  loader: 'css-loader'
              }
        ],
      }
     ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './App.html'
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery"
    })
  ]
};

module.exports = config;