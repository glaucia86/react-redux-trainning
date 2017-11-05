/**
 * Data: 05/11/2017
 * Arquivo: ../todoService.js
 * Descrição: Arquivo responsável por manipular os exports dos arquivos
 * Author: Glaucia Lemos
 */

const Todo = require('./todo');

Todo.methods(['get', 'post', 'put', 'delete']);
Todo.updateOptions({ new: true, runValidators: true });

module.exports = Todo;
