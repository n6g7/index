import React from "react"

import Project from "./Project"
import { Table } from "@as0n/layout"
import { projects } from "../data.yml"

class Projects extends React.PureComponent {
  render() {
    return (
      <Table title="Projects">
        <thead>
          <tr>
            <th>Project</th>
            <th>Links</th>
            <th>Start date</th>
            <th>Last activity</th>
          </tr>
        </thead>
        <tbody>
          {projects.map((row, i) => (
            <Project key={i} data={row} />
          ))}
        </tbody>
      </Table>
    )
  }
}

export default Projects
