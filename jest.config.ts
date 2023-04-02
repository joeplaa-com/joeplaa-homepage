import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
    reporters: ['default'],
    testPathIgnorePatterns: [
        '<rootDir>/.jest/',
        '<rootDir>/.next/',
        '<rootDir>/.vscode/',
        '<rootDir>/coverage/',
        '<rootDir>/node_modules/',
        '<rootDir>/node-app-to-s3/',
        '<rootDir>/out/'
    ],
    transform: {
        '^.+\\.(js|jsx|ts|tsx)$': ['babel-jest', { presets: ['next/babel'] }]
    },
    transformIgnorePatterns: [
        '/.next/',
        '/node_modules/',
        '^.+\\.module\\.(css|sass|scss)$'
    ]
};

export default config;
