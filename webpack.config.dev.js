// WebPack configuration for development
const path = require('path');
const glob = require("glob");

module.exports = {
    mode: 'development',
    devtool: "source-map",
    entry: glob.sync('./test/**/*.test.js'),
    output: {
        filename: 'bibtex-js-parser-dev.js',
        library: {
            name: 'BibtexParser',
            type: 'commonjs'
        },
        path: path.resolve(__dirname, 'dist/dev'),
    },
    resolve: {
        fallback: {
            fs: false
        }
    }
};