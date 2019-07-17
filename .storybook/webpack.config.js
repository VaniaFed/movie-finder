const merge = require('webpack-merge');

const baseConfig = require('../webpack/webpack-config');
const devConfig = require('../webpack/webpack-dev-config');
const aliasConfig = require('../webpack/webpack-alias-config.js');

const config = merge([baseConfig, devConfig, aliasConfig]);

module.exports = async ({ config, mode }) => {
    return { ...config };
};
