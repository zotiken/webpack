var path = require("path");
var HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

let isDev = process.env.NODE_ENV || "development" 

module.exports = {
    mode: isDev,
  entry: {
    main: "./src/index.js",
  },
  output: {
    filename: "[name][hash].js",
    path: path.resolve(__dirname, "dist"),
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 3000,
    open: true
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    }
},
  plugins: [
    new HtmlWebpackPlugin({
        filename: 'index.html',
      template: path.resolve("./src/index.html"),
    }),
    new CleanWebpackPlugin(),
    new CopyPlugin({
        patterns: [
          { from: 'src/assets', to: 'dest/assets' },
        ],
      }),
  ],
  module:{
      rules:[
          {test: /\.m?js$/,
          exclude: /(node_modules|bower_components)/,
          use: [
           'babel-loader',
        //    'eslint-loader'
          ]
        },
        {
            test: /\.(png|jpe?g|gif)$/i,
            use: [
              {
                loader: 'file-loader',
              },
            ],
          }
      ]
    }
};
