/**
 * Arquivo: index.jsx
 * Data: 02/11/2017
 * Descrição: arquivo porta de entrada e responsável pela lógica a ser executada via Js.
 * Author: Glaucia Lemos
 */

import React from 'react'
import ReactDOM from 'react-dom'
import { Primeiro, Segundo } from './component'

ReactDOM.render(
    <div>
        <Primeiro />
        <Segundo />
    </div>, document.getElementById('app'))