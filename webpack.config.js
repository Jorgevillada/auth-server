var fs = require('fs');
var path = require('path');
var nodeModules = {};

var nodeModulesPath = path.resolve(__dirname, 'node_modules');

fs.readdirSync('node_modules')
  .filter(function (x) {
    return ['.bin'].indexOf(x) === -1;
  })
  .forEach(function (mod) {
    nodeModules[mod] = 'commonjs ' + mod;
  });

module.exports = {
  entry: './src/server.ts',
  output: {
    path: __dirname + '/dist',
    filename: 'server.js',
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        'exclude': [/node_modules/, nodeModulesPath],
        enforce: 'pre',
        use: [
          {
            loader: 'tslint-loader',
            options: { /* Loader options go here */ }
          }
        ]
      },
      {
        'test': /\.tsx?$/,
        'loaders': ['babel-loader', 'ts-loader'],
        'exclude': [/node_modules/, nodeModulesPath]
      },
      // babel-loader for pure javascript (es6) => javascript (es5)
      {
        'test': /\.(jsx?)$/,
        'loaders': ['babel'],
        'exclude': [/node_modules/, nodeModulesPath]
      }
    ]
  },
  stats: {
    colors: true
  },
  resolve: {
    // Add '.ts' and '.tsx' as a resolvable extension.
    extensions: ['.webpack.js', '.web.js', '.ts', '.tsx', '.js'],
  },
  target: 'node',
  mode: "development",
  externals: nodeModules,
};