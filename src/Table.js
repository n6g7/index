import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

import linkIcon from "./link.svg"
import projectorIcon from "./projector.svg"
import tvIcon from "./tv.svg"

const Title = styled.h3`
  margin: 50px auto 20px;
  opacity: 0.5;
  max-width: ${p => p.theme.containerWidth}px;

  @media (max-width: ${p => p.theme.containerWidth}px) {
    padding: 0 ${p => p.theme.spacing}px;
  }
`

const StyledTable = styled.table`
  border-collapse: collapse;
  margin: auto;
  width: ${p => p.theme.containerWidth}px;

  thead {
    td,
    th {
      border-bottom: 1px solid ${p => p.theme.colours.grey};
      font-size: 0.9em;
      font-variant: small-caps;
    }
  }

  tbody td {
    border-bottom: 1px solid ${p => p.theme.colours.border};
    padding: ${p => p.theme.spacing}px 0;

    &:not(:first-child) {
      padding-left: ${p => p.theme.spacing / 2}px;
    }
    &:not(:last-child) {
      padding-right: ${p => p.theme.spacing / 2}px;
    }

    &.links a:not(:last-child) {
      margin-right: 10px;
    }

    p {
      margin: 0;
    }

    .repository,
    .homepage,
    .slides,
    .video {
      margin-left: 18px;
      position: relative;

      &::before {
        content: "";
        display: inline-block;
        height: 14px;
        left: -16px;
        opacity: 0.7;
        position: absolute;
        top: 3px;
        width: 14px;
      }
    }

    .homepage::before {
      background: url(${linkIcon});
      background-size: contain;
    }
    .repository::before {
      background: url("https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/github.svg");
    }
    .video::before {
      background: url(${tvIcon});
      background-size: contain;
    }
    .slides::before {
      background: url(${projectorIcon});
      background-size: contain;
    }
  }

  @media (max-width: ${p => p.theme.containerWidth}px) {
    width: 100%;

    thead {
      display: none;
    }

    tbody tr {
      border-bottom: 1px solid ${p => p.theme.colours.grey};
      display: flex;
      flex-flow: column nowrap;
      padding: ${p => p.theme.spacing}px 0;

      &:first-child {
        border-top: 1px solid ${p => p.theme.colours.grey};
      }

      td {
        border: none;
        padding: ${p => p.theme.spacing / 2}px;

        &:first-child {
          display: flex;
          flex-flow: row nowrap;

          & > :first-child {
            margin-right: ${p => p.theme.spacing}px;
          }
        }

        &:nth-last-child(-n + 4)::before {
          content: var(--label) ": ";
          font-size: 0.9em;
          opacity: 0.6;
        }
      }
    }

    &.two-lines td:first-child {
      flex-flow: column nowrap;

      h3 {
        margin-bottom: ${p => p.theme.spacing / 4}px;
      }
    }
  }
`

class Table extends React.PureComponent {
  static propTypes = {
    Component: PropTypes.func.isRequired,
    headers: PropTypes.arrayOf(PropTypes.string).isRequired,
    rows: PropTypes.arrayOf(PropTypes.any).isRequired,
    title: PropTypes.string.isRequired,
  }

  render() {
    const { headers, rows, Component, title, ...props } = this.props

    return (
      <>
        <Title>{title}</Title>
        <StyledTable {...props}>
          <thead>
            <tr>
              {headers.map((header, i) => (
                <th key={i}>{header}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <Component key={i} data={row} />
            ))}
          </tbody>
        </StyledTable>
      </>
    )
  }
}

export default Table
