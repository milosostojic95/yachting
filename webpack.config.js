const path = require('path');
var MiniCssExtractPlugin = require('mini-css-extract-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

  module.exports = {
    entry: require.resolve('./site/js/index.js'),
    context: __dirname,
    mode: 'development',
    output: {
      path: path.resolve(__dirname, './site/dist'),
      filename: 'main.[contentHash].js'
  },
  plugins:[
    new HtmlWebpackPlugin({
      template: "./site/template.html"
    }), new MiniCssExtractPlugin({
      filename:"[name].[contentHash].css"
    })
  ],
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader,'css-loader','sass-loader',]
      },
      {
        test: /\.(svg|png|jpg|gif)$/,
        use: [
          {
            loader:"file-loader",
            options: {
              name:"[name].[contentHash].[ext]",
              outputPath:"imgs",
              esModule: false
            }
          }
        ]
      },
      {
        test: /\.(html)$/,
        use: {
          loader: 'html-loader',
        }
      },{
        test:/\.(woff2|woff|otf|ttf)scss$/,
        use:[
          {
            loader:"file-loader",
            options: {
              name:"[name].[hash].[ext]",
              outputPath: "fonts/",
              esModule: false,
            }
          }
        ]
      }
    ]
  }
 };
