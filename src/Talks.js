import React from "react"

import Talk from "./Talk"
import Table from "./Table"
import { talks } from "../data.yml"

class Talks extends React.PureComponent {
  render() {
    return (
      <Table title="Talks" headers={["Title", "Video", "Date"]} rows={talks} Component={Talk} />
    )
  }
}

export default Talks
