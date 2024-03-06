import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
    reporters: ['default'],
    testPathIgnorePatterns: [
        '<rootDir>/.jest/',
        '<rootDir>/.next/',
        '<rootDir>/.vscode/',
        '<rootDir>/.yarn/',
        '<rootDir>/coverage/',
        '<rootDir>/lib/',
        '<rootDir>/node_modules/',
        '<rootDir>/out/'
    ],
    transform: {
        '^.+\\.(t|j)sx?$': [
            '@swc/jest',
            {
                jsc: {
                    transform: {
                        react: {
                            runtime: 'automatic'
                        }
                    }
                }
            }
        ]
    },
    transformIgnorePatterns: []
};

export default config;
