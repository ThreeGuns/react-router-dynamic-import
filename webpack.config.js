const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const extractLESS = new ExtractTextPlugin('./style/index.css');

module.exports = {
    mode: 'development',
    devtool: 'source-map',
    entry: {
        'main.bundle': './src/index.js',
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        // filename: 'bundle.js'
        filename: '[name].js',
        chunkFilename: '[name].[id].js',
    },
    module: {
        rules: [
            {
                test: /\.js$/i,
                use: [{loader: 'babel-loader'}],
                include: /src/,
                exclude: /node_modules/,
            },
            {
                test: /\.less$/i,
                use: extractLESS.extract([ 'css-loader', 'less-loader' ])
            },
            {
                test: /\.(png|jpg|gif|bmp|svg|ico)$/i,
                exclude: /node_modules/,
                use: [{loader: 'url-loader'}],
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            chunks: ['main.bundle'],
            filename: 'index.html',
            template: path.resolve(__dirname, './src/index.html')
        }),
        extractLESS,
    ],
    devServer: {
        inline: true,
        contentBase: path.join(__dirname, "public"),
        compress: false,
        port: 9000,
        after(app){
            console.log('app start done!');
        },
        before(app){
            app.get('/test', (req, res) => {
                res.json({a: 2});
            });
        },
        index: 'index.html',
        open: true,
        progress: true,
    }
};