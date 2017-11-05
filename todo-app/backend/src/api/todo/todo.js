/**
 * Data: 05/11/2017
 * Arquivo: ../api.js
 * Descrição: Arquivo responsável por realizar o mapeamento do objeto para o MongoDb.
 * Author: Glaucia Lemos
 */

const restful = require('node-restful');
const mongoose = restful.mongoose;

const TodoSchema = new Schema({
    description: { type: String, required: true },
    done: { type: String, required: true, default: false },
    createdAt: { type: Date, default: Date.now }
});

module.exports = restful.model("Todo", TodoSchema);