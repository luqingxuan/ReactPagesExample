const path = require('path');

const Env = require('./env.json')[process.env.NODE_ENV];

const IsProduct = process.env.NODE_ENV === 'production';

const devServer = IsProduct ? {} : {
    host: Env.devHost,
    port: Env.devPort,
    publicPath: '/',
    contentBase: path.resolve(__dirname, './dist'),
    historyApiFallback: false,
    // Set this if you want to enable gzip compression for assets
    compress: true,
    // webpack-dev-middleware options
    // quiet: false,
    // noInfo: false,
    lazy: false,
    stats: {
        colors: true
    },
    watchOptions: {
        poll: true,
        aggregateTimeout: 300,
        ignored: /node_modules/
    },
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type'
    }
};

module.exports = devServer;
