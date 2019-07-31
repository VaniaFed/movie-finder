module.exports = {
    setupFiles: ['<rootDir>/enzyme.config.js'],
    modulePathIgnorePatterns: ['enzyme.config.js'],
    moduleNameMapper: {
        '^components(.*)$': '<rootDir>/src/components$1',
        '^containers(.*)$': '<rootDir>/src/containers$1',
        '^.+\\.js(jsx)$': 'babel-jest',
        '\\.(css|less|scss|sass)$': 'identity-obj-proxy'
    }
};
