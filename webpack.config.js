const Dotenv = require('dotenv-webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = (env) => ({
  mode: env.NODE_ENV,
  entry: './src/index.js',
  output: {
    publicPath: '/',
    filename: './bundle.js',
    chunkFilename: '[name][chunkhash].js',
    path: path.join(__dirname, 'public'),
  },
  devServer: {
    historyApiFallback: true,
  },
  resolve: {
    modules: [path.resolve(__dirname, './src'), 'node_modules'],
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
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: ['file-loader'],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: 'src/assets/index.html',
    }),
    new Dotenv({
      path: env.NODE_ENV === 'development'
        ? './environments/.env.development'
        : './environments/.env.production',
    }),
  ],
});
