import React from "react";
import moment from "moment-he";
import { Empty } from "@as0n/layout";

import Loader from "./Loader";

interface Props {
  date: string;
  loading?: boolean;
  noLoader?: boolean;
}

const Date = ({ date, loading = false, noLoader = false }: Props) => {
  return date && !loading ? (
    <span>{moment(date).humanEra("LL")}</span>
  ) : loading && !noLoader ? (
    <Loader />
  ) : (
    <Empty />
  );
};

export default Date;
