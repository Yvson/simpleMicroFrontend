var path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

const mode = process.env.NODE_ENV || 'production';
const deps = require("./package.json").dependencies;

module.exports = {
  mode,
  entry: './src/index.ts',
  devtool: 'source-map',
  output: {
    publicPath: "auto"
  },
  devServer: {
    port: 8081,
    historyApiFallback: true,
  },
  optimization: {
    minimize: mode === 'production',
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.jsx', '.js', '.json'],
  },
  module: {
    rules: [
      {
        test: /\.m?js/,
        type: "javascript/auto",
        resolve: {
          fullySpecified: false,
        },
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(ts|tsx|js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ['@babel/preset-env']
          }
        },
      },
    ],
  },

  plugins: [
    // New
    new ModuleFederationPlugin({
      name: 'host',
      filename: 'remoteEntry.js',
      remotes: {
        'remoteApp': 'remote@http://localhost:8082/remoteEntry.js',
      },
      exposes: {},
      shared: {
        react: {
          eager: false,
          requiredVersion: deps.react,
          singleton: true,
        },
        'react-dom': {
          eager: false,
          requiredVersion: deps['react-dom'],
          singleton: true,
        },
        'react-router-dom': {
          eager: false,
          requiredVersion: deps['react-router-dom'],
          singleton: true,
        }
      }
    }),
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
  ]
};