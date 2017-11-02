/**
 * Arquivo: pessoa.js
 * Data: 02/11/2017
 * Descrição: arquivo responsável por exibir o nome da Pessoa
 * Author: Glaucia Lemos
 */


export default class Pessoa {
  constructor(nome) {
    this.nome = nome;
  }

  //Método responsável por exibir o nome da Pessoa:
  exibirNome() {
    console.log(`Seu nome é....: ${this.nome}`);
  }
}

