module.exports = {
    env: {
        browser: true,
        es2020: true,
        jest: true,
        node: true
    },
    extends: [
        'standard',
        'next',
        'eslint:recommended',
        'plugin:compat/recommended',
        'plugin:jsx-a11y/recommended',
        'plugin:optimize-regex/recommended',
        'plugin:react/recommended',
        'plugin:react-hooks/recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/eslint-recommended'
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        babelOptions: {
            plugins: [
                '@babel/plugin-proposal-class-properties'
            ]
        },
        ecmaFeatures: {
            jsx: true
        },
        ecmaVersion: 2015, // try to use the oldest version possible to support as many old browsers as is reasonable, but don't overdo. 2015 = es6, which really is the minimum. Match this to "target" in tsconfig.json.
        sourceType: 'module'
    },
    plugins: [
        'jest',
        'react',
        '@typescript-eslint'
    ],
    settings: {
        react: {
            version: 'detect'
        }
    },
    rules: {
        indent: ['error', 4, { SwitchCase: 1 }],
        'linebreak-style': 0,
        quotes: ['error', 'single'],
        'no-console': 'warn',
        'no-empty': 'warn',
        'no-unused-vars': 'off',
        'no-use-before-define': 'off',
        '@typescript-eslint/explicit-function-return-type': 'warn', // Consider using explicit annotations for object literals and function return types even when they can be inferred.
        '@typescript-eslint/no-empty-interface': [
            'error',
            {
                allowSingleExtends: true
            }
        ],
        '@typescript-eslint/no-unused-vars': [
            'error',
            {
                vars: 'all',
                args: 'after-used',
                ignoreRestSiblings: false
            }
        ],
        '@typescript-eslint/no-use-before-define': ['error'],
        'react/prop-types': 0,
        semi: [2, 'always'],
        'space-before-function-paren': ['warn', {
            anonymous: 'never',
            named: 'never',
            asyncArrow: 'always'
        }]
    }
};
