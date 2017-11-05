/**
 * Arquivo: src/app.jsx
 * Data: 05/11/2017
 * Descrição: Arquivo responsável pelos Componentes da aplicação.
 * Author: Glaucia Lemos
 */

import 'modules/bootstrap/dist/css/bootstrap.min.css'
import 'modules/font-awesome/css/font-awesome.min.css'

import React from 'react'
import Todo from '../todo/todo'
import About from '../about/about'
import Menu from '../template/menu'

export default props => (
  <div className="container">
    <Menu />
    <Todo />
    <About />
  </div>
)