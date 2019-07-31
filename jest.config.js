module.exports = {
    setupFiles: ['./enzyme.config.js'],
    modulePathIgnorePatterns: ['enzyme.config.js'],
    moduleNameMapper: {
        '\\.(css|less|scss|sass)$': 'identity-obj-proxy'
    }
};
