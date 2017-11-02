/**
 * Arquivo: webpack.config.js
 * Data: 02/11/2017
 * Descrição: Arquivo responsável por realizar a transpilação dos arquivos do projeto.
 * Author: Glaucia Lemos
 */

const webpack = require('webpack')

module.exports = {
    entry: './ex/index.js',
    output: {
        path: __dirname + '/public',
        filename: './bundle.js'
    },
    devServer: {
        port: 8080,
        contentBase: './public'
    }
}