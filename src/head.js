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
        bottom: -1px;
        content: '';
        left: 0;
        position: absolute;
        right: 0;
        top: 100%;
        transition: inherit;
      }
    }

    &:hover::after {
      background: ${Color(theme.colours.blue).alpha(0.15).string()};
      left: -2px;
      right: -2px;
      top: 0;
    }
  }
`
