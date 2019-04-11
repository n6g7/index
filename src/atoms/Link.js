import React from "react"
import Empty from "./Empty"

const regex = /^https?:\/\/([a-z0-9.-]+)(\/.*)?$/

export default ({ className, text, title, url }) => {
  if (!url) return <Empty />

  if (!text) {
    const result = url.match(regex)
    if (result) text = result[1]
    else text = url
  }

  return (
    <a href={url} title={title} target="blank" className={className}>
      {text}
    </a>
  )
}
