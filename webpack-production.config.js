const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');
const version = require('./package.json').version;
const sharedConfig = require('./webpack-shared.config');

module.exports = {

    entry: [
        './client.js'
    ],

    output: {
        filename: 'client-' + version + '.js',
        path: path.join(__dirname, '/public'),
        publicPath: '/'
    },

    resolve: {
        modulesDirectories: ['node_modules', 'shared'],
        extensions: ['', '.js', '.jsx']
    },

    module: {
        loaders: sharedConfig.loaders.concat([
            {
                test: /\.(js|jsx)$/,
                loaders: ['babel'],
                exclude: /node_modules/
            },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract('style', 'css!autoPrefixer?{browsers:'+ JSON.stringify(sharedConfig.autoprefixer.browsers) + '}!sass')
            }
        ])
    },

    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'production')
        }),
        new ExtractTextPlugin('styles-' + version + '.css', {
            disable: false,
            allChunks: true,
            compress: {
                warnings: false
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: false,
            compress: {
                warnings: false
            }
        }),
        new webpack.NoErrorsPlugin()
    ]
};
