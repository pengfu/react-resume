/**
 * Created by chang_su on 2017/5/15.
 */
const path = require('path');
const appPath = path.join(path.resolve(__dirname),'app')
const componentPath = path.join(path.resolve(__dirname),'app','components')
const stylePath = path.join(path.resolve(__dirname),'app','style')
console.log(appPath)
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
    template: './app/index.html',
    filename: 'index.html',
    inject: 'body'
})
module.exports = {
    entry: './app/index.js',
    output: {
        path: path.resolve(''),
        filename: 'index_bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                include: appPath,
                exclude: /node_modules/
            },
            {
                test: /\.jsx$/,
                loader: 'babel-loader',
                include: appPath,
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: ['style-loader',
                    { loader: 'css-loader', options: { modules:true,importLoaders: 1 } },
                    'postcss-loader'],
                include: componentPath,
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: ['style-loader',
                    { loader: 'css-loader', options: { importLoaders: 1 } },
                    'postcss-loader'],
                include: stylePath,
                exclude: /node_modules/
            },
            {
                test: /\.(png|jpe?g|gif)$/,
                loader: 'url-loader',
                options: {
                    limit: 1024,
                    name: 'img/[name].[hash:7].[ext]'
                }
            },
            {
                test: /\.(svg|woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10240,
                }
            }
        ]
    },
    plugins:[HtmlWebpackPluginConfig]
}