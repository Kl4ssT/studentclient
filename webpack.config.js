const webpack = require('webpack');
const path = require('path');
const htmlPlugin = require('html-webpack-plugin');
const extractTextPlugin = require('extract-text-webpack-plugin');

const PATHS = {
    source: path.resolve(__dirname, 'src'),
    build: path.resolve(__dirname, 'build')
};

module.exports = {
    entry: [
        'react-hot-loader/patch',
        path.join(PATHS.source, 'index.js')
    ],
    devtool: process.env.WEBPACK_DEVTOOL || 'eval-source-map',
    output: {
        filename: 'bundle.js',
        path: path.join(PATHS.build)
    },
    module: {
        loaders: [
            {
                test: /\.(js|jsx)$/,
                loader: 'babel-loader',
                exclude: /(node_modules|build)/
            },
            {
                test: /\.(sass|scss)$/,
                use: extractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: 'css-loader|sass-loader|autoprefixer-loader'
                })
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin(),
        new htmlPlugin({
            template: path.join(PATHS.source, 'index.html'),
            files: {
                js: ['bundle.js'],
                css: ['styles.css']
            }
        }),
        new extractTextPlugin('styles.css')
    ]
};