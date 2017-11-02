/**
 * Arquivo: index.js
 * Data: 02/11/2017
 * Descrição: arquivo porta de entrada e responsável pela lógica a ser executada via Js.
 * Author: Glaucia Lemos
 */

const produto = {
    nome: 'Caneta Bic Preta',
    preco: 1.90,
    desconto: 0.05
}

// Função para clonar o novo Produto (usando o recurso do 'spread'):
function clone(objeto) {
    return {...objeto}
}

const novoProduto = clone(produto);
novoProduto.nome = 'Caneta Bic Azul';

console.log(produto, novoProduto);