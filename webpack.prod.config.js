const merge = require('webpack-merge');

const baseConfig = require('./webpack/webpack-config');
const appConfig = require('./webpack/webpack-app-config');
const prodConfig = require('./webpack/webpack-prod-config');
const devserverConfig = require('./webpack/webpack-devserver-config');
const aliasConfig = require('./webpack/webpack-alias-config.js');

module.exports = merge([
    baseConfig,
    appConfig,
    prodConfig,
    devserverConfig,
    aliasConfig
]);
