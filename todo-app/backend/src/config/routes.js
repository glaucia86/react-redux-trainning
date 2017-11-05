/**
 * Data: 05/11/2017
 * Arquivo: config/routes.js
 * Descrição: Arquivo responsável pelas rotas da API REST.
 * Author: Glaucia Lemos
 */

const express = require('express');

module.exports = function(server) {

    //API Routes:
    const router = express.Router();
    server.use('/api', router);

    //TODO Routes:
    const todoService = require('../api/todo/todoService');
    todoService.register(router, '/todos');
}
