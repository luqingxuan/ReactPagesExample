const developmentEnv = require('./env.json').development;

// 域名
const webServerDomain = developmentEnv.domain;

// 端口
const webServerPort = developmentEnv.port;

// 后台API服务器
const apiServer = developmentEnv.apiServer;

const extend = require('extend');

const webpack = require('webpack');

const config = extend(true, {}, require('./webpack.common.config.js'));

config.module = config.module || {};
config.module.rules = config.module.rules || [];

config.module.rules.push({
    test: /\.jsx?$/,
    exclude: /node_modules/,
    use: ['babel-loader']
});

config.plugins = config.plugins || [];

// webpack-dev-server enhancement plugins
config.plugins.push(new(require('webpack-dashboard/plugin'))());
config.plugins.push(new webpack.NamedModulesPlugin());
config.plugins.push(new webpack.HotModuleReplacementPlugin());

for (var key in config.entry) {
    if (!config.entry.hasOwnProperty(key))
        continue;

    if (!(config.entry[key] instanceof Array))
        config.entry[key] = [config.entry[key]];

    // bundle the client for hot reloading, only- means to only hot reload for successful updates
    config.entry[key].unshift('webpack/hot/only-dev-server');

    // bundle the client for webpack-dev-server, and connect to the provided endpoint
    config.entry[key].unshift('webpack-dev-server/client/?http://' + webServerDomain + ':' + webServerPort);

    // activate HMR for React
    config.entry[key].unshift('react-hot-loader/patch');
}

// inject env
config.plugins.push(
    new webpack.DefinePlugin({
        'process.env': {
            'NODE_ENV': JSON.stringify('development'),
            'API_SERVER': JSON.stringify(apiServer)
        }
    })
);

// api proxy for develop
config.devServer.proxy = developmentEnv.apiProxy;

config.devtool = 'source-map';

module.exports = config;
