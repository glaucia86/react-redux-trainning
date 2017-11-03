/**
 * Arquivo: field.js
 * Data: 03/11/2017
 * Descrição: arquivo responsável por trabalhar com componentização em react.
 * Author: Glaucia Lemos
 */

import React, { Component } from 'react'

class Field extends Component {
    constructor(props) {
        super(props) 
        this.state = { value: this.props.initialValue }
        this.handleChange = this.handleChange.bind(this)
    }

    //Método que lidará com a mudança do label:
    handleChange(event) {
        this.setState({ value: event.target.value })
    }

    render() {
        return (
        <div>
            <label>{this.state.value}</label>
            <br />
            <input onChange={this.handleChange} value={this.state.value} />
        </div>
        )
    }
}

export default Field