import { injectGlobal } from 'styled-components'
import Color from 'color'
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
      color: ${theme.colours.blue};
      position: relative;
      text-decoration: none;
      transition: 0.2s;

      &::after {
        background: ${theme.colours.blue};
        bottom: -2px;
        content: '';
        height: 1px;
        left: 0;
        position: absolute;
        transition: inherit;
        width: 100%;
      }
    }

    &:hover::after {
      background: ${Color(theme.colours.blue).alpha(0.15).string()};
      height: ${2*theme.spacing}px;
    }
  }
`
