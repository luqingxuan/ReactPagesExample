const webpack = require('webpack');

const extend = require('extend');

const ExtractTextPlugin = require('extract-text-webpack-plugin');

// 域名
const webServerDomain = 'localhost';

// 端口
const webServerPort = 7070;

// API服务器
const developApiServer = ''

const defaults = require('./webpack.common.config.js');
const config = extend(true, {}, defaults);

config.module = config.module || {};
config.module.loaders = config.module.loaders || [];

config.plugins = config.plugins || [];

// vue global
config.plugins.unshift(
    new webpack.ProvidePlugin({
        React: 'react',
        ReactDOM: 'react-dom',
        ReactRouter: 'react-router'
    })
);

// inject env
config.plugins.push(
    new webpack.DefinePlugin({
        'process.env': {
            'NODE_ENV': JSON.stringify('develop'),
            'API_SERVER': JSON.stringify(developApiServer)
        }
    })
);

// hot reload
config.plugins.push(new webpack.HotModuleReplacementPlugin());

for (var key in config.entry) {
    if (!config.entry.hasOwnProperty(key))
        continue;

    if (!(config.entry[key] instanceof Array))
        config.entry[key] = [config.entry[key]];

    config.entry[key].unshift('webpack/hot/dev-server');
    config.entry[key].unshift(require.resolve('webpack-dev-server/client/') + '?' + 'http://' + webServerDomain + ':' + webServerPort);
}

// api proxy for develop
config.devServer.proxy = {
    '/v1/*': {
        target: 'http://localhost:10002/',
        secure: false
    }
};

config.devtool = 'source-map';

module.exports = config;
