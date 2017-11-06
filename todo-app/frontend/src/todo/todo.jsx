/**
 * Arquivo: src/film.jsx
 * Data: 05/11/2017
 * Descrição: Arquivo responsável pelos Componentes relacionado a Todo.
 * Author: Glaucia Lemos
 */

import React, { Component } from 'react'
import PageHeader from '../template/pageHeader'

export default class Todo extends Component {
    render() {
        return(
            <div>
                <PageHeader name="Tarefas" small="Cadastro"></PageHeader>
            </div>
        )
    }
}