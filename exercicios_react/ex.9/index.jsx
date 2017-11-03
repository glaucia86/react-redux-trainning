/**
 * Arquivo: index.jsx
 * Data: 03/11/2017
 * Descrição: arquivo porta de entrada e responsável pela lógica a ser executada via Js.
 * Author: Glaucia Lemos
 */

import React from 'react'
import ReactDOM from 'react-dom'
import Familia from './familia'
import Member from './member'

ReactDOM.render(
  <Familia sobrenome='Lemos'>
    <Member nome='Glaucia' />
    <Member nome='José Edmilson' />
    <Member nome='Jurema' />
    <Member nome='Jake' />
  </Familia>,
  document.getElementById("app")
);