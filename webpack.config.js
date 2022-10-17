const { resolve } = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const isDev = process.env.NODE_ENV === "development";
const isProd = !isDev;

const fileName = (ext) =>
  isDev ? `[name].${ext}` : `[name].[contenthash].${ext}`;

module.exports = {
  mode: "development",
  devtool: isDev ? "source-map" : false,
  entry: "./src/index.js",
  output: {
    publicPath: "/",
    path: resolve(__dirname, "wp-dist"),
    filename: fileName("js"),
  },
  resolve: {
    // Add `.ts` and `.tsx` as a resolvable extension.
    extensions: [".tsx", ".ts", ".js", ".jsx"],
  },
  optimization: {
    splitChunks: {
      chunks: "all",
    },
  },
  plugins: [
    new HTMLWebpackPlugin({
      favicon: "./src/assets/img/favicon.ico",
      template: "./public/index.html",
      minify: { collapseWhitespace: isProd },
    }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin(),
  ],
  devServer: {
    port: 3009,
    hot: isDev,
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              "@babel/preset-env",
              "@babel/preset-react",
              "@babel/preset-typescript",
            ],
          },
        },
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
      {
        test: /\.(jpe?g|png|gif|svg|webp|ico)?$/,
        exclude: /fonts/,
        type: "asset/resource",
        generator: {
          filename: `assets/img/${fileName("[ext]")}`,
        },
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)?$/,
        exclude: /img/,
        type: "asset/resource",
        generator: {
          filename: `assets/fonts/${fileName("[ext]")}`,
        },
      },
      {
        test: /\.scss?$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          "css-loader",
          "resolve-url-loader",
          {
            loader: "sass-loader",
            options: {
              sourceMap: true,
            },
          },
        ],
      },
    ],
  },
};
