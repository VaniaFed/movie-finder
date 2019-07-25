const path = require('path');

module.exports = {
    resolve: {
        alias: {
            Components: path.resolve(__dirname, '../src/components/'),
            Containers: path.resolve(__dirname, '../src/containers/'),
            Src: path.resolve(__dirname, '../src/'),
            Assets: path.resolve(__dirname, '../src/assets/'),
            Variables: path.resolve(__dirname, '../src/_vars.scss')
        }
    }
};
