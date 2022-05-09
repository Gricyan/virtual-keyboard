const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const ESLintPlugin = require('eslint-webpack-plugin');

const isDev = process.env.NODE_ENV === 'development'
const isProd = !isDev

const optimization = () => {
  if (isProd) {
    return {
      minimizer: [     
        new CssMinimizerPlugin(),
        new TerserPlugin(),
      ],
    }
  }  
}

const babelLoader = () => {
  if (isProd) {
    return {
      loader: 'babel-loader',
      options: {
          presets: ['@babel/preset-env']
      },
    }
  }  
}

const myEslintOptions = {
  extensions: [`js`],
  exclude: [`node_modules`],
};

module.exports = {
  context: path.resolve(__dirname, 'src'),
  mode: isDev ? 'development' : 'production',
  devtool: isDev ? 'inline-source-map' : false,

  entry: {
    main: './index.js',
  },  
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new ESLintPlugin(myEslintOptions),
    new CleanWebpackPlugin(),
    new HTMLWebpackPlugin({
      title: 'RS Virtual keyboard', 
      filename: 'index.html',         
      template: './index.html',
      minify: {
        collapseWhitespace: isProd
      }
    }),    
    new MiniCssExtractPlugin({
      filename: 'style.css'
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, './src/favicon.ico'),
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
        test: /\.s[ac]ss$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader",],
       },
      {
        test: /\.(png|jpg|jpeg|svg|gif)$/,        
        type: 'asset/inline',
      },
      {
        test: /\.(ttf|woff|woff2|eot)$/,
        type: 'asset/resource', 
        generator: {
          filename: 'assets/fonts/Xolonium/[name][ext][query]'
        }      
      },
      {
        test: /\.m?js$/,
        exclude: /(node_modules)/,
        use: babelLoader(),
      }
    ]
  },
  optimization: optimization(),
  devServer: {
    port: 3000,
  }
}