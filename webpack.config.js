const path = require('path');
  module.exports = {
  entry: require.resolve('./site/js/index.js'),
    context: __dirname,
    mode: 'development',
    output: {
      path: path.resolve(__dirname, './site/dist'),
      filename: 'main.js'
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
          { loader: 'sass-loader', }
        ]
      }
    ]
  }

 }
