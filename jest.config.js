module.exports = {
    setupFiles: ['./__tests__/global.js'],
    modulePathIgnorePatterns: ['global.js'],
    moduleNameMapper: {
        '\\.(css|less|scss|sass)$': 'identity-obj-proxy'
    }
};
