/**
 * Arquivo: index.jsx
 * Data: 03/11/2017
 * Descrição: arquivo porta de entrada e responsável pela lógica a ser executada via Js.
 * Author: Glaucia Lemos
 */

import React from 'react'
import ReactDOM from 'react-dom'
import Field from './field'

ReactDOM.render(<Field initialValue="Teste" />, document.getElementById("app"));