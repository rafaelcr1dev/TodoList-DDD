import React from 'react'
import ReactDOM from 'react-dom'

import AppComponent from './App'

ReactDOM.hydrate(
  <AppComponent data={{ comments: [] }} />,
  document.querySelector('#app')
)
