// WebPack configuration for production
const path = require('path');

const LicensePlugin = require('webpack-license-plugin')

let type = 'umd';
let dir = 'dist';
if (process.env.LIB_TYPE) {
    type = process.env.LIB_TYPE;
    if (type === 'umd') {
        dir = 'umd';
    } else if (type === 'commonjs') {
        dir = 'cjs';
    }
}

module.exports = {
    mode: 'production',
    entry: './src/index.js',
    output: {
        filename: 'bibtex-js-parser.js',
        library: {
            name: 'BibtexParser',
            type: type
        },
        environment: {
            arrowFunction: false
        },
        path: path.resolve(__dirname, dir),
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