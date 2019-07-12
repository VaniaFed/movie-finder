const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    publicPath: './',
    filename: "bundle.js"
  },
  mode: "production",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: ["babel-loader"]
      },
      {
        test: /\.html$/,
        use: ["html-loader"]
      },
      {
        test: /\.css$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              modules: false
            }
          },
          {
            loader: "postcss-loader",
            options: {
              ident: "postcss",
              plugins: [require("autoprefixer")()]
            }
          }
        ]
      },
      {
        test: /\.sass$/,
        exclude: /\.module\.sass$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              modules: false
            }
          },
          {
            loader: "postcss-loader",
            options: {
              ident: "postcss",
              plugins: [require("autoprefixer")()]
            }
          },
          "sass-loader",
        ]
      },
      {
        test: /\.module.sass$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            query: {
              localIdentName: "[hash:8]",
              modules: true
            }
          },
          {
            loader: "postcss-loader",
            options: {
              ident: "postcss",
              plugins: [require("autoprefixer")()]
            }
          },
          "sass-loader"
        ],
        test: /\.png|jpg|jpeg|svg|gif$/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 10000
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html"
    })
  ],
  stats: "errors-only",
  resolve: {
    extensions: [".webpack.js", ".js", ".jsx"]
  }
};

