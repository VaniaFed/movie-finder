module.exports = {
    parser: '@typescript-eslint/parser',
    env: {
        browser: true,
        es6: true,
        node: true,
        'jest/globals': true
    },
    extends: [
        'airbnb',
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
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
    plugins: ['react', 'react-hooks', '@typescript-eslint', 'prettier', 'jest'],
    settings: {
        'import/resolver': {
            alias: {
                map: [
                    ['components', './src/components'],
                    ['containers', './src/containers'],
                    ['actions', './src/actions'],
                    ['reducers', './src/reducers'],
                    ['constants.ts', './src/constants.ts'],
                    ['selectors', './src/selectors'],
                    ['types', './src/types'],
                    ['utils', './src/utils'],
                    ['lib', './src/lib'],
                    ['src', './src'],
                    ['sagas', './src/sagas'],
                    ['services', './src/services']
                ],
                extensions: ['.ts', '.tsx', '.js', '.jsx', '.json']
            }
        }
    },
    rules: {
        indent: 4,
        'arrow-parens': 0,
        'no-param-reassign': 1,
        'implicit-arrow-linebreak': 1,
        'no-use-before-define': 0,
        'linebreak-style': 0,
        quotes: [2, 'single'],
        indent: ['error', 4, { SwitchCase: 1 }],
        'import/prefer-default-export': 0,
        'react/require-default-props': 0,
        '@typescript-eslint/no-explicit-any': 0,
        '@typescript-eslint/explicit-function-return-type': 0,
        'react/jsx-filename-extension': [
            2,
            { extensions: ['.js', '.jsx', '.ts', '.tsx'] }
        ],
        'jsx-a11y/label-has-for': 0,
        'jsx-a11y/anchor-is-valid': 0,
        'implicit-arrow-linebreak': 0,
        'consistent-return': 0,
        'no-console': 0,
        'global-require': 0,
        'prettier/prettier': 0,
        'jsx-a11y/label-has-associated-control': 0,
        'no-undef': 0,
        'no-underscore-dangle': 0
    }
};
