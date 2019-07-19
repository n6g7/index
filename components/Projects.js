import React from "react"

import Project from "./Project"
import Table from "./Table"
import { projects } from "../data.yml"

class Projects extends React.PureComponent {
  render() {
    return (
      <Table
        title="Projects"
        headers={["Project", "Links", "Start date", "Last activity"]}
        rows={projects}
        Component={Project}
      />
    )
  }
}

export default Projects
