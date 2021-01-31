const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    devServer: {
        contentBase: path.resolve(__dirname, 'dist'),
        compress: true,
        writeToDisk: true,
        publicPath: './dist'
    },
    entry: './src/js/app.js',
    output: {
        filename: 'app.js',
        path: path.resolve(__dirname, 'dist', 'js'),
        publicPath: './js'
    },
    module: {
        rules: [
            {
                test: /\.(s(c|a)ss)$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader
                    },
                    {
                        loader: 'css-loader'
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            postcssOptions: {
                                plugins: [require('autoprefixer')]
                            }
                        }
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: '../index.html'
        }),
        new MiniCssExtractPlugin({
            filename: '../css/styles.css'
        })
    ],
    mode: 'development',
    devtool: 'source-map'
};
