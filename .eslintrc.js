module.exports = {
    env: {
        browser: true,
        node: true,
        es2020: true,
        jest: true
    },
    extends: [
        'standard',
        'eslint:recommended',
        'plugin:compat/recommended',
        'plugin:jsx-a11y/recommended',
        'plugin:mdx/recommended',
        'plugin:optimize-regex/recommended',
        'plugin:react/recommended',
        'plugin:react-hooks/recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/eslint-recommended'
    ],
    parserOptions: {
        ecmaVersion: 2020,
        ecmaFeatures: {
            jsx: true
        },
        sourceType: 'module'
    },
    plugins: [
        '@typescript-eslint',
        'jest',
        'promise',
        'react'
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
        'no-unused-vars': 'off',
        '@typescript-eslint/no-unused-vars': [
            'error',
            {
                vars: 'all',
                args: 'after-used',
                ignoreRestSiblings: false
            }
        ],
        '@typescript-eslint/explicit-function-return-type': 'off',
        'no-empty': 'warn',
        'no-use-before-define': 'off',
        '@typescript-eslint/no-use-before-define': ['error'],
        'react/prop-types': 0,
        semi: [2, 'always'],
        'space-before-function-paren': ['warn', {
            anonymous: 'never',
            named: 'never',
            asyncArrow: 'always'
        }]
    },
    overrides: [
        {
            // enable the rule specifically for TypeScript files
            files: ['*.ts', '*.mts', '*.cts', '*.tsx'],
            rules: {
                '@typescript-eslint/explicit-function-return-type': ['warn'] // Consider using explicit annotations for object literals and function return types even when they can be inferred.
            }
        }
    ]
};
