import React from "react"

import Talk from "./Talk"
import { Table } from "@as0n/layout"
import { talks } from "../data.yml"

class Talks extends React.PureComponent {
  render() {
    return (
      <Table title="Talks" className="two-lines">
        <thead>
          <tr>
            <th>Title</th>
            <th>Links</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {talks.map((row, i) => (
            <Talk key={i} data={row} />
          ))}
        </tbody>
      </Table>
    )
  }
}

export default Talks
