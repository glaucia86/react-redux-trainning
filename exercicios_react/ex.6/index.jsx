/**
 * Arquivo: index.jsx
 * Data: 03/11/2017
 * Descrição: arquivo porta de entrada e responsável pela lógica a ser executada via Js.
 * Author: Glaucia Lemos
 */

import React from 'react'
import ReactDOM from 'react-dom'
import FamiliaLemos from './familiaLemos'

ReactDOM.render(
  <div>
    <FamiliaLemos />
  </div>,
  document.getElementById("app")
);