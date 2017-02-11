var path = require('path')
var webpack = require('webpack')

module.exports = {
    entry: './src/webpackindex.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        publicPath: '/dist/',
        filename: 'build.js'
    },
    plugins: [
        new webpack.DefinePlugin({
            title: 'Hello World app'
        })
    ]
}