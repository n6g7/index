import React from 'react'
import ReactDOM from 'react-dom'
import { ThemeProvider } from 'styled-components'

import Projects from './Projects'
import Talks from './Talks'
import theme from './theme'

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <>
      <Projects />
      <Talks />
    </>
  </ThemeProvider>,
  document.getElementById('root')
)
