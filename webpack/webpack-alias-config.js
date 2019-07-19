const path = require('path');

module.exports = {
    resolve: {
        alias: {
            Components: path.resolve(__dirname, '../src/components/'),
            src: path.resolve(__dirname, '../src/')
        }
    }
};
