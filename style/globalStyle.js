import { createGlobalStyle } from "styled-components"
import theme from "./theme"

export default createGlobalStyle`
  @import url(${theme.font.url});

  body {
    font-family: ${theme.font.family};
    margin: 0;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
  }

  * {
    box-sizing: border-box;
  }

  h1 {
    font-size: 1.2em;
    margin: ${3 * theme.spacing}px 0 0;
    text-align: center;
  }

  h2 {
    font-size: 0.8em;
    margin: 0 0 ${3 * theme.spacing}px;
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
      background: ${theme.colours.alpha(theme.colours.blue, 0.15)};
      left: -2px;
      right: -2px;
      top: 0;
    }
  }

  footer {
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    margin: ${3 * theme.spacing}px 0;

    a {
      margin: 0 ${theme.spacing}px;
      padding: 3px 1px 0;

      img {
        opacity: 0.6;
      }
    }
  }
`
