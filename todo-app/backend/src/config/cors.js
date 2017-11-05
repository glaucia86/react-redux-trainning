/**
 * Data: 05/11/2017
 * Arquivo: config/cors.js
 * Descrição: Arquivo responsável para executar as aplicações de origins diferentes (Back & Front).
 * Author: Glaucia Lemos
 */

module.exports = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With,Content-Type, Accept');

    next();
}