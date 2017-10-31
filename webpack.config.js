const resolve = require('path').resolve
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')


module.exports = (options = {}) => ({
    entry: {
        vendor: './examples/vendor.js',
        index: './examples/index.js'
    },
    output: {
        path: resolve(__dirname, 'public/build'),
        publicPath: '/build/',
        chunkFilename: '[name].js',
        filename:'[name].js' ,
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                use: ['vue-loader']
            },
            {
                test: /\.js$/,
                use: ['babel-loader'],
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader', 'postcss-loader']
            },
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.(png|jpg|jpeg|gif|eot|ttf|woff|woff2|svg|svgz)(\?.+)?$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 10000
                    }
                }]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: '../index.html',
            template: 'examples/index.tpl'
        }),
        new webpack.optimize.CommonsChunkPlugin({
            names: ['vendor', 'manifest']
        }),
    ],
    resolve: {
        alias: {
            'vue': options.dev ? 'vue/dist/vue.js' : 'vue/dist/vue.min.js'
        }
    },
    devServer: {
        contentBase: "./public",
        historyApiFallback: true,
        host: '127.0.0.1',
        port: 8080,


    },
    devtool: options.dev ? '#eval-source-map' : ''
})
