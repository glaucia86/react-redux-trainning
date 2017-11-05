/**
 * Data: 05/11/2017
 * Arquivo: config/server.js
 * Descrição: Arquivo responsável por levantar o serviço no lado do Back-End da aplicação.
 * Author: Glaucia Lemos
 */

const port = 3003;

const bodyParser = require('body-parser');
const express = require('express');
const server = express();

server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());

server.listen(port, function() {
    console.log('Back-End is running on port ' + port);
})