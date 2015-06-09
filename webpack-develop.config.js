const webpack = require('webpack');
const path = require('path');
const sharedConfig = require('./webpack-shared.config');

module.exports = {

    devtool: 'eval', // Fast, fast rebuilds, development only, see generated code per module
    debug: true, // Each module is executed with eval and //@ sourceURL,

    entry: [
        'webpack-dev-server/client?http://0.0.0.0:3001',
        'webpack/hot/only-dev-server',
        './client.js'
    ],

    output: {
        filename: 'client.js',
        path: path.join(__dirname, 'public'),
        publicPath: 'http://localhost:3001/public/'
    },

    resolve: {
        //alias: {
        //    shared: path.resolve(__dirname, './app/pages/App/shared'),
        //    actions: path.resolve(__dirname, './app/actions'),
        //    stores: path.resolve(__dirname, './app/stores')
        //},
        //alias: {
        //    shared: path.join(__dirname, './app/pages/App/shared')
        //},
        //modulesDirectories: ['node_modules', 'shared'],
        extensions: ['', '.js', '.jsx']
    },

    module: {
        loaders: sharedConfig.loaders.concat([
            {
                test: /\.(js|jsx)$/,
                loaders: ['react-hot', 'babel'],
                exclude: /node_modules/
            },
            {
                test: /\.scss$/,
                loaders: ['style', 'css', 'autoPrefixer?{browsers:'+ JSON.stringify(sharedConfig.autoprefixer.browsers) + '}', 'sass']
            }
        ])
    },

    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ]
};
