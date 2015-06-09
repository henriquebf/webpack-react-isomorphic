const webpack = require('webpack');
const path = require('path');
const sharedConfig = require('./webpack-shared.config');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const version = require('./package.json').version;
const cssnext = require('cssnext');

var fs = require('fs');

var nodeModules = {};
fs.readdirSync('node_modules')
    .filter(function(x) {
        return ['.bin'].indexOf(x) === -1;
    })
    .forEach(function(mod) {
        nodeModules[mod] = 'commonjs ' + mod;
    });

module.exports = [

    {
        /**
         * client
         */

        name: 'browser',
        target: 'web',

        devtool: 'eval', // Fast, fast rebuilds, development only, see generated code per module
        debug: true, // Each module is executed with eval and //@ sourceURL,

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
            publicPath: 'http://localhost:3001/'
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

    },

    {
        /**
         * server
         */

        name: 'server',
        target: 'node',

        node: {
            __dirname: true,
            __filename: true
        },

        entry: [
            './server.js'
        ],

        output: {
            filename: 'server.js',
            path: path.join(__dirname, 'server'),
        },

        externals: nodeModules,

        resolve: {
            extensions: ['', '.js', '.jsx']
        },

        module: {
            loaders: [
                {
                    test: /\.(js|jsx)$/,
                    loaders: ['babel'],
                    exclude: /node_modules/
                }
            ]
        },

        plugins: [
            new webpack.IgnorePlugin(/\.(css|less)$/),
            new webpack.DefinePlugin({
                'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
            }),
            new webpack.NoErrorsPlugin()
        ]
    }
];

//const webpack = require('webpack');
//const path = require('path');
//const sharedConfig = require('./webpack-shared.config');
//
//module.exports = {
//
//    devtool: 'eval', // Fast, fast rebuilds, development only, see generated code per module
//    debug: true, // Each module is executed with eval and //@ sourceURL,
//
//    entry: [
//        'webpack-dev-server/client?http://0.0.0.0:3001',
//        'webpack/hot/only-dev-server',
//        './client.js'
//    ],
//
//    output: {
//        filename: 'client.js',
//        path: path.join(__dirname, 'public'),
//        publicPath: 'http://localhost:3001/public/'
//    },
//
//    resolve: {
//        //alias: {
//        //    shared: path.resolve(__dirname, './app/pages/App/shared'),
//        //    actions: path.resolve(__dirname, './app/actions'),
//        //    stores: path.resolve(__dirname, './app/stores')
//        //},
//        //alias: {
//        //    shared: path.join(__dirname, './app/pages/App/shared')
//        //},
//        //modulesDirectories: ['node_modules', 'shared'],
//        extensions: ['', '.js', '.jsx']
//    },
//
//    module: {
//        loaders: sharedConfig.loaders.concat([
//            {
//                test: /\.(js|jsx)$/,
//                loaders: ['react-hot', 'babel'],
//                exclude: /node_modules/
//            },
//            {
//                test: /\.scss$/,
//                loaders: ['style', 'css', 'autoPrefixer?{browsers:'+ JSON.stringify(sharedConfig.autoprefixer.browsers) + '}', 'sass']
//            }
//        ])
//    },
//
//    plugins: [
//        new webpack.DefinePlugin({
//            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
//        }),
//        new webpack.HotModuleReplacementPlugin(),
//        new webpack.NoErrorsPlugin()
//    ]
//};
