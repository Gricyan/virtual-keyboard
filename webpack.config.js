const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");


module.exports = {
  context: path.resolve(__dirname, 'src'),
  mode: 'development', // we see the code in 'bundle.js'
  // mode: 'production', // code in 'bundle.js' is trimmed
  entry: {
    main: './index.js',
  },  
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },  
  plugins: [
    new CleanWebpackPlugin(),
    new HTMLWebpackPlugin({
      title: 'RS Virtual keyboard', 
      filename: 'index.html',         
      template: './index.html'
    }),    
    new MiniCssExtractPlugin({
      filename: 'style.css'
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, './src/favicon.ico')        
        },
        {
          from: "./assets/",
          to: "./assets/",
          force: true,
          noErrorOnMissing: true,
        }
      ]
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader']
      },
      {
        test: /\.(png|jpg|jpeg|svg|gif)$/,
        type: 'asset/inline',
      },
      {
        test: /\.(ttf|woff|woff2|eot)$/,
        type: 'asset/inline',    
      }
    ]
  },
  devServer: {
    port: 3000,
  }
}