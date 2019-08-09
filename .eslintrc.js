module.exports = {
    env: {
        browser: true,
        es6: true,
        node: true
    },
    extends: [
        'airbnb',
        'eslint:recommended',
        'plugin:import/errors',
        'plugin:import/warnings',
        'prettier',
        'prettier/react',
        'plugin:prettier/recommended'
    ],
    globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly'
    },
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        },
        ecmaVersion: 2018,
        sourceType: 'module'
    },
    plugins: ['react', 'react-hooks', 'prettier'],
    settings: {
        'import/resolver': {
            alias: {
                map: [
                    ['components', './src/components'],
                    ['containers', './src/containers'],
                    ['actions', './src/actions'],
                    ['reducers', './src/reducers'],
                    ['constants.js', './src/constants.js'],
                    ['selectors', './src/selectors/'],
                    ['utils', '../src/utils/'],
                    ['sagas', '../src/sagas/'],
                    ['services', '../src/services/']
                ],
                extensions: ['.ts', '.js', '.jsx', '.json']
            }
        }
    },
    rules: {
        'arrow-parens': 0,
        'no-param-reassign': 1,
        'implicit-arrow-linebreak': 1,
        'no-use-before-define': 0,
        'linebreak-style': 0,
        'prettier/prettier': 2,
        quotes: [2, 'single'],
        'prettier/prettier': [2, { singleQuote: true }],
        indent: ['error', 4, { SwitchCase: 1 }],
        'import/prefer-default-export': 0
    }
};
