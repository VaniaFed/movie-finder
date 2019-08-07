module.exports = {
    setupFiles: ['<rootDir>/enzyme.config.js'],
    modulePathIgnorePatterns: ['enzyme.config.js'],
    moduleNameMapper: {
        '^components(.*)$': '<rootDir>/src/components$1',
        '^containers(.*)$': '<rootDir>/src/containers$1',
        '^.+\\.js(jsx)$': 'babel-jest',
        '\\.(css|less|scss|sass)$': 'jest-transform-stub',
        '^selectors(.*)$': ['<rootDir>/src/selectors$1'],
        '^utils(.*)$': ['<rootDir>/src/utils$1'],
        '^sagas(.*)$': ['<rootDir>/src/sagas$1']
    }
};
