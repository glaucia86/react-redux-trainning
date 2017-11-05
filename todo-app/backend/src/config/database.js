/**
 * Data: 05/11/2017
 * Arquivo: config/database.js
 * Descrição: Arquivo responsável pela configuração do MongoDb.
 * Author: Glaucia Lemos
 */

const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

module.exports = mongoose.connect('mongodb://localhost/todo');