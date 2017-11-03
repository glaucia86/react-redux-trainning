/**
 * Arquivo: classeComponent.jsx
 * Data: 03/11/2017
 * Descrição: arquivo responsável por trabalhar com classes dentro de um Componente.
 * Author: Glaucia Lemos
 */

import React, { Component } from 'react'


export default class ClassComponent extends Component {
    constructor(props) {
        super(props)
        this.state = { valor: props.valorInicial } //aqui estou inicializando o estado do 'value'
    }

    //Função de somar:
    soma(delta) {
        this.setState({ valor: this.state.valor + delta })
    }
    render() {
        return (
        <div>
            <h1>{this.props.label}</h1>
            <h2>{this.state.valor}</h2>

            <button type="button" className="btn btn-large btn-block btn-danger" onClick={() => this.soma(-1)}>Decrementar</button>
            <button type="button" className="btn btn-large btn-block btn-default" onClick={() => this.soma(1)}>Incrementar</button>
        </div>
        )
    }
}
