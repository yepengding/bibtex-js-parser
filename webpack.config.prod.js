// WebPack configuration for production
const path = require('path');

const LicensePlugin = require('webpack-license-plugin')

module.exports = {
    mode: 'production',
    entry: './src/index.js',
    output: {
        filename: 'bibtex-js-bibtex_parser.js',
        library: {
            name: 'Parser',
            // type: 'commonjs'
            type: 'umd'
        },
        environment: {
            arrowFunction: false
        },
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            ['@babel/preset-env', {targets: "defaults"}]
                        ]
                    }
                }
            }
        ]
    },
    resolve: {
        fallback: {
            fs: false
        }
    },

    plugins: [
        new LicensePlugin()
    ]
};