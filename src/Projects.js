import React from 'react'

import Project from './Project'
import Table from './Table'
import projects from '../projects.yml'

class Projects extends React.PureComponent {
  render () {
    return <Table
      headers={["Project", "Links", "Start date", "Last activity"]}
      rows={projects}
      Component={Project}
    />
  }
}

export default Projects
