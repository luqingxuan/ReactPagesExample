const Env = require('./env.json')[process.env.NODE_ENV];

const IsProduct = process.env.NODE_ENV === 'production';

const webpack = require('webpack');

const config = require('./webpack.common.config.js');

config.module.rules.push({
    test: /\.jsx?$/,
    exclude: /node_modules/,
    use: ['babel-loader']
});

// inject env
config.plugins.push(new webpack.DefinePlugin({
    'process.env.API_SERVER': JSON.stringify(Env.apiServer)
}));

for (var key in (IsProduct ? {} : config.entry)) {
    if (!config.entry.hasOwnProperty(key))
        continue;

    if (!(config.entry[key] instanceof Array))
        config.entry[key] = [config.entry[key]];

    // bundle the client for hot reloading, only- means to only hot reload for successful updates
    config.entry[key].unshift('webpack/hot/only-dev-server');

    // bundle the client for webpack-dev-server, and connect to the provided endpoint
    config.entry[key].unshift('webpack-dev-server/client/?http://' + Env.devHost + ':' + Env.devPort);

    // activate HMR for React
    config.entry[key].unshift('react-hot-loader/patch');
}

// api proxy for develop
config.devServer.proxy = Env.devProxy;

config.devtool = IsProduct ? 'cheap-module-source-map' : 'source-map';

module.exports = config;
