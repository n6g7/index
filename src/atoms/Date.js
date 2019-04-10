import React from "react"
import moment from 'moment-he'

import Empty from "./Empty"
import Loader from "./Loader"

export default ({ date, loading = false, noLoader = false }) => {
  return date
    ? <span>{moment(date).humanEra('LL')}</span>
    : loading
      ? noLoader
        ? <span />
        : <Loader />
      : <Empty />
}
