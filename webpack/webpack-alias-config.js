const path = require('path');

module.exports = {
    resolve: {
        alias: {
            components: path.resolve(__dirname, '../src/components/'),
            containers: path.resolve(__dirname, '../src/containers/'),
            src: path.resolve(__dirname, '../src/'),
            assets: path.resolve(__dirname, '../src/assets/'),
            '_vars.scss': path.resolve(__dirname, '../src/_vars.scss')
        }
    }
};
