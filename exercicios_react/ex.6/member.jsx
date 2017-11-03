/**
 * Arquivo: member.jsx
 * Data: 03/11/2017
 * Descrição: arquivo responsável por trabalhar com os componentes filhos da aplicação.
 * Author: Glaucia Lemos
 */

import React from 'react'

export default props => (
    <div>{props.nome} <strong>{props.sobrenome}</strong>
    </div>
)