/**
 * Arquivo: familiaLemos.jsx
 * Data: 03/11/2017
 * Descrição: arquivo responsável por trabalhar com os componentes filhos da aplicação.
 * Author: Glaucia Lemos
 */

import React from 'react'
import Member from './member'

export default props => (
  <div>
    <Member nome='Glaucia' sobrenome='Lemos' />
    <Member nome='José Edmilson' sobrenome='Lemos' />
    <Member nome='Jurema' sobrenome='Lemos' />
    <Member nome='Jake' sobrenome='Lemos' />
  </div>
);
