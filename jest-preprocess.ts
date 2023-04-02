const babelOptions = {
    presets: ['babel-preset-env', 'babel-preset-gatsby', '@babel/preset-react', '@babel/preset-typescript', '@lingui/babel-preset-react']
};

// eslint-disable-next-line @typescript-eslint/no-var-requires
module.exports = require('babel-jest').default.createTransformer(babelOptions);
