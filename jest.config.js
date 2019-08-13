module.exports = {
    setupFiles: ['<rootDir>/enzyme.config.js'],
    modulePathIgnorePatterns: ['enzyme.config.js', '\\\\node_modules\\\\'],
    moduleNameMapper: {
        '^components(.*)$': '<rootDir>/src/components$1',
        '^containers(.*)$': '<rootDir>/src/containers$1',
        '^actions(.*)$': '<rootDir>/src/actions$1',
        '^constants.js(.*)$': '<rootDir>/src/constants.js$1',
        '^selectors(.*)$': '<rootDir>/src/selectors$1',
        '^services(.*)$': '<rootDir>/src/services$1',
        '^sagas(.*)$': '<rootDir>/src/sagas$1',
        '^.+\\.js(jsx)$': 'babel-jest',
        '\\.(css|less|scss|sass)$': 'jest-transform-stub'
    },
    verbose: false
};
