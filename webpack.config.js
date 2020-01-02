const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  entry: require.resolve('./src/js/index.js'),
  context: __dirname,
  mode: 'development',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js'
  },
  plugins:[
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/template.html'
    }),
    new HtmlWebpackPlugin({
      filename: 'service.html',
      template: './src/service.html'
    }),
    new HtmlWebpackPlugin({
      filename: 'blog.html',
      template: './src/blog.html'
    }),
    new HtmlWebpackPlugin({
      filename: 'blogsingle.html',
      template: './src/blogsingle.html'
    }),
     new MiniCssExtractPlugin({
      filename: '[name].css'
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
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'imgs',
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
      },
      {
        test:/\.(woff2|woff|otf|ttf)$/,
        use:[
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'fonts',
            }
          }
        ]
      }
    ]
  }
 };
