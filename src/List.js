import React from 'react'

import Project from './Project'
import projects from '../projects.yml'

class List extends React.PureComponent {
  render () {
    return <table>
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
    </table>
  }
}

export default List
