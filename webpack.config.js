const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    'index': path.join(__dirname,'/src/index.js'),
    'example1': path.join(__dirname,'/src/example1.js'),
    'example2': path.join(__dirname,'/src/example2/example2.js'),
    'example3': path.join(__dirname,'/src/example3/example3.js'),
    'example4': path.join(__dirname,'/src/example4.js'),
  },
  output: {
    filename: '[name].js',
    path: path.join(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      chunks:['index'],
      title:'index'
    }),
    new HtmlWebpackPlugin({
      filename: 'example1.html',
      chunks:['example1'],
      title:'example1'
    }),
    new HtmlWebpackPlugin({
      filename: 'example2.html',
      chunks:['example2'],
      title:'example2'
    }),
    new HtmlWebpackPlugin({
      filename: 'example3.html',
      chunks:['example3'],
      title:'example3'
    }),
    new HtmlWebpackPlugin({
      filename: 'example4.html',
      chunks:['example4'],
      title:'example4'
    }),
  ]
};
