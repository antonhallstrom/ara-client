const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const DotenvPlugin = require('dotenv-webpack')

module.exports = {
  entry: {
    app: path.resolve('src/index.js'),
  },
  plugins: [
    new DotenvPlugin({
      path: path.resolve(__dirname, './.env'),
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
      },
      ARA_API_URL: JSON.stringify(process.env.ARA_API_URL),
    }),
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      title: 'Ara',
      favicon: 'public/favicon.ico',
      template: 'public/index.html',
    }),
    new webpack.HotModuleReplacementPlugin(),
    new CopyWebpackPlugin([
      {
        from: path.join(__dirname, 'static'),
        to: path.join(__dirname, 'dist'),
      },
    ]),
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ['file-loader'],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf|ico)$/,
        use: ['file-loader'],
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              '@babel/preset-react',
              '@emotion/babel-preset-css-prop',
            ],
          },
        },
      },
      {
        test: /\.js$/,
        use: ['cache-loader'],
        include: path.resolve('src'),
      },
    ],
  },
}
