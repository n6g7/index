import React from "react";

import Talk from "./Talk";
import { Table } from "@as0n/layout";
import { talks } from "../data.yml";

const Talks = () => {
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
        {talks.map((talk) => (
          <Talk key={talk.date} talk={talk} />
        ))}
      </tbody>
    </Table>
  );
};

export default Talks;
