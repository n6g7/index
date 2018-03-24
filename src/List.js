import React from 'react'
import styled from 'styled-components'

import Project from './Project'
import projects from '../projects.yml'

const Table = styled.table`
  border-collapse: collapse;
  margin: auto;
  width: ${p => p.theme.containerWidth}px;

  thead {
    td, th {
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

    p {
      margin: 0;
    }
  }

  @media (max-width: ${p => p.theme.containerWidth}px) {
    width: 100%
  }
`

class List extends React.PureComponent {
  render () {
    return <Table>
      <thead>
        <tr>
          <th>Project</th>
          <th>URL</th>
          <th>Repo</th>
          <th>Start date</th>
          <th>Last activity</th>
        </tr>
      </thead>
      <tbody>
        { projects.map((project, i) =>
          <Project key={i} project={project} />
        )}
      </tbody>
    </Table>
  }
}

export default List
