import styled from "styled-components"

export default styled.span`
  border-bottom: 1px ${p => p.theme.colours.grey} solid;
  display: inline-block;
  width: ${p => 2 * p.theme.spacing}px;
`
