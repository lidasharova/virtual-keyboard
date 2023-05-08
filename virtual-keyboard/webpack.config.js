const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = (env, options) => {
  const isProduction = options.mode === 'production';
  const config = {
    mode: isProduction ? 'production' : 'development',
    devtool: isProduction ? undefined : 'source-map',
    watch: !isProduction,
    entry: ['@babel/polyfill', './src/index.js'],
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'dist'),
      clean: true,
    },
    module: {
      rules: [
        {
          test: /\.woff2?$/i,
          type: 'asset/resource',
          generator: { filename: 'fonts/[name][ext]' },
        },

        {
          test: /\.(jpe?g|png|webp|gif|svg)$/i,
          type: 'asset/resource',
          use: [
            {
              loader: 'image-webpack-loader',
              options: {
                mozjpeg: {
                  progressive: true,
                },
                // optipng.enabled: false will disable optipng
                optipng: {
                  enabled: false,
                },
                pngquant: {
                  quality: [0.65, 0.9],
                  speed: 4,
                },
                gifsicle: {
                  interlaced: false,
                },
                // the webp option will enable WEBP
                webp: {
                  quality: 75,
                },
              },
            },
          ],
          generator: { filename: 'favicon/[name][ext]' },
        },
        {
          test: /\.webmanifest$/i,
          type: 'asset/resource',
          generator: { filename: 'favicon/[name][ext]' },
        },
        { test: /\.html$/i, loader: 'html-loader' },
        {
          test: /\.(?:js|mjs|cjs)$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: [['@babel/preset-env', { targets: 'defaults' }]],
            },
          },
        },
        {
          test: /\.scss$/,
          use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
        },
      ],
    },

    plugins: [
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({ template: './src/index.html' }),
      new MiniCssExtractPlugin({
        filename: 'style.css',
      }),
    ],
    devServer: {
      port: 9000,
      open: true,
    },
  };
  return config;
};
