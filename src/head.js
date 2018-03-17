import { injectGlobal } from 'styled-components'
import theme from './theme'

injectGlobal`
  @import url('${theme.font.url}');

  body {
    font-family: ${theme.font.family};
    margin: 0;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
  }

  h1 {
    font-size: 1.2em;
    margin: ${3*theme.spacing}px 0 0;
    text-align: center;
  }

  h2 {
    font-size: 0.8em;
    margin: 0 0 ${3*theme.spacing}px;
    opacity: 0.5;
    text-align: center;
  }

  a {
    &:link, &:visited {
      border-bottom: 1px solid ${theme.colours.blue};
      color: ${theme.colours.blue};
      text-decoration: none;
      text-shadow:
        0px 1px 0px white, 1px 1px 0px white, - 1px 1px 0px white,
        0px 2px 0px white, 1px 2px 0px white, - 1px 2px 0px white;
      transition: 0.5s;
    }

    &:hover {
      opacity: 0.8;
    }
  }
`
