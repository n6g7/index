import React from "react"
import moment from "moment-he"
import { Empty } from "@as0n/layout"

import Loader from "./Loader"

export default ({ date, loading = false, noLoader = false }) => {
  return date && !loading ? (
    <span>{moment(date).humanEra("LL")}</span>
  ) : loading && !noLoader ? (
    <Loader />
  ) : (
    <Empty />
  )
}
