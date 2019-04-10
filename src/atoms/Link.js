import React from "react"
import Empty from "./Empty"

const regex = /^https?:\/\/([a-z0-9.-]+)(\/.*)?$/

export default ({ className, title, url }) => {
  if (!url) return <Empty />

  const result = url.match(regex)

  return <a href={url} title={title} target="blank" className={className}>
    {result ? result[1] : url}
  </a>
}
