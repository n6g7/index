import React from "react";

import Project from "./Project";
import { Table } from "@as0n/layout";

// @ts-ignore
import { projects } from "../data.yml";

const Projects = () => {
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
        {projects.map((project) => (
          <Project key={project.name} project={project} />
        ))}
      </tbody>
    </Table>
  );
};

export default Projects;
