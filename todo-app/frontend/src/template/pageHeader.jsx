/**
 * Arquivo: pageHeader.jsx
 * Data: 05/11/2017
 * Descrição: Arquivo responsável pelos Componentes relacionado ao Menu.
 * Author: Glaucia Lemos
 */

import React from 'react'

export default props => (
    <header className='page-header'>
        <h2>{ props.name } <small>{ props.small }</small></h2>
    </header>
)