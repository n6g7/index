import React from "react"

import Talk from "./Talk"
import Table from "./Table"
import { talks } from "../data.yml"

class Talks extends React.PureComponent {
  render() {
    return (
      <Table
        title="Talks"
        headers={["Title", "Links", "Date"]}
        rows={talks}
        Component={Talk}
        className="two-lines"
      />
    )
  }
}

export default Talks
