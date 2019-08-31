const withSass = require('@zeit/next-sass');
const withTypescript = require('@zeit/next-typescript');
const webpack = require('webpack');

const merge = require('webpack-merge');
const aliasConfig = require('./webpack/webpack-alias-config');

const serverConfig = {
    plugins: [
        new webpack.DefinePlugin({
            CLIENT_SIDE_RENDERING: false
        })
    ]
};

module.exports = withTypescript(
    withSass({
        webpack: config => {
            return merge(config, aliasConfig, serverConfig);
        }
    })
);
