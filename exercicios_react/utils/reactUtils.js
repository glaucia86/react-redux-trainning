/**
 * Arquivo: reactUtils.jsx
 * Data: 03/11/2017
 * Descrição: arquivo responsável por apresentar props dos filhos de um componente.
 * Author: Glaucia Lemos
 */

import React from 'react'

function childrenWithProps(children, props) {
    return React.Children.map(props.children, child =>
      React.cloneElement(child, { ...props })
    );
}

export { childrenWithProps }