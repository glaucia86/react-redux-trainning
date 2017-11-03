/**
 * Arquivo: familia.jsx
 * Data: 03/11/2017
 * Descrição: arquivo responsável por trabalhar com os componentes filhos da aplicação.
 * Author: Glaucia Lemos
 */

import React from 'react'
import { childrenWithProps } from "../utils/reactUtils";

export default props => (
  <div>
    <h1>Família</h1>
    { childrenWithProps(props.children, props) }
  </div>
);