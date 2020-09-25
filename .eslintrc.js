module.exports = {
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 2020,
        ecmaFeatures: {
            jsx: true
        },
        sourceType: 'module',
    },
    env: {
        browser: true,
        node: true,
        es2020: true
    },
    settings: {
        react: {
            version: "detect"
        }
    },
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:react-hooks/recommended',
        'plugin:@typescript-eslint/recommended',
    ],
    plugins: [
        'react',
        '@typescript-eslint'
    ],
    rules: {
        indent: ["error", 4],
        '@typescript-eslint/explicit-function-return-type': "off",
        '@typescript-eslint/explicit-module-boundary-types': "off",
        'react/react-in-jsx-scope': "off"
    }
};