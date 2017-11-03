/**
 * Arquivo: classeComponent.jsx
 * Data: 03/11/2017
 * Descrição: arquivo responsável por trabalhar com classes dentro de um Componente.
 * Author: Glaucia Lemos
 */

import React, { Component } from 'react'


export default class ClassComponent extends Component {
    render() {
        return(
            <h1>{this.props.value}</h1>
        )
    }
}
