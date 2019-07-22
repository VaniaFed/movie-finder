const path = require('path');

module.exports = {
    resolve: {
        alias: {
            Components: path.resolve(__dirname, '../src/components/'),
            Src: path.resolve(__dirname, '../src/'),
            Assets: path.resolve(__dirname, '../src/assets/')
        }
    }
};
