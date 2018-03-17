import React from 'react'
import ReactDOM from 'react-dom'
import { ThemeProvider } from 'styled-components'

import List from './List'
import theme from './theme'

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <List />
  </ThemeProvider>,
  document.getElementById('root')
)
