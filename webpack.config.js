const webpack = require("webpack");
const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const FixStyleOnlyEntriesPlugin = require("webpack-fix-style-only-entries");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = (env, argv) => {
  return {
    mode: argv.mode,

    entry: {
      app: path.resolve(__dirname, "./src/assets/js/index.js"),
      "app.css": path.resolve(__dirname, "./src/assets/_scss/app.scss"),
    },

    output: {
      path: path.resolve(__dirname, "./htdocs/"),
      filename: "assets/js/[name].js",
    },
    module: {
      rules: [
        {
          test: /\.(sa|sc|c)ss$/,
          use: [
            MiniCssExtractPlugin.loader,
            "css-loader",
            "postcss-loader",
            "sass-loader",
          ],
        },
      ],
    },
    plugins: [
      // new CleanWebpackPlugin({
      //   cleanOnceBeforeBuildPatterns: ["**/*"],
      // }),
      new FixStyleOnlyEntriesPlugin(),
      new MiniCssExtractPlugin({
        filename: "assets/css/[name]",
      }),
    ],

    watchOptions: {
      ignored: /node_modules/,
    },
  };
};
