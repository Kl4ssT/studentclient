const webpack = require('webpack');
const path = require('path');
const htmlPlugin = require('html-webpack-plugin');
const extractTextPlugin = require('extract-text-webpack-plugin');
const googleFontsPlugin = require("google-fonts-webpack-plugin");

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
        path: path.join(PATHS.build),
        publicPath: '/'
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
                    use: 'css-loader!sass-loader!autoprefixer-loader!resolve-url-loader'
                })
            },
            {
                test: /\.css$/,
                use: extractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: 'css-loader'
                })
            },
            {
                test: /\.(jpe?g|png)$/i,
                loader: 'file-loader?name=/images/[name].[ext]'
            }
        ]
    },
    devServer: {
        contentBase: './build',
        noInfo: true,
        hot: true,
        inline: true,
        historyApiFallback: true,
        host: '0.0.0.0',
        port: '9000'
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
        new extractTextPlugin('styles.css'),
        new googleFontsPlugin({
            fonts: [
                { family: "Montserrat" }
            ]
        })
    ]
};