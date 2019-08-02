const path = require('path');

module.exports = {
    resolve: {
        alias: {
            components: path.resolve(__dirname, '../src/components/'),
            containers: path.resolve(__dirname, '../src/containers/'),
            src: path.resolve(__dirname, '../src/'),
            assets: path.resolve(__dirname, '../src/assets/'),
            actions: path.resolve(__dirname, '../src/actions/'),
            reducers: path.resolve(__dirname, '../src/reducers/'),
            'constants.js': path.resolve(__dirname, '../src/constants.js'),
            '_vars.scss': path.resolve(__dirname, '../src/_vars.scss')
        }
    }
};
