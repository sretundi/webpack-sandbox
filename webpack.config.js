const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require('webpack');
const path = require('path');

// todo check the filename outputs for output and html plugin
// todo full implementation of HMR https://survivejs.com/webpack/appendices/hmr/
module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'index_bundle.js',
    },
    devtool: 'inline-source-map',
    devServer: {
        open: true,
        overlay: true,
        hotOnly: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "Webpack demo",
            template: "./templates/index.html",
            filename: "./index.html"
        }),
        new webpack.HotModuleReplacementPlugin(),
    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    }
};
