import React, { useEffect, useState } from "react";
import moment from "moment-he";
import { Link } from "@as0n/layout";

import { Date, RowTitle } from "./atoms";
import { Project } from "../lib/types";

interface Props {
  project: Project;
}

interface RepoProps {
  repo: Project["repo"];
  githubData: any;
}

const Repo = ({ repo, githubData }: RepoProps) => {
  if (!(githubData && githubData.html_url && githubData.full_name)) {
    return <span className="repository">{repo}</span>;
  }

  return (
    <Link
      icon="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/github.svg"
      url={githubData.html_url}
      text={githubData.full_name}
    />
  );
};

const ProjectRow = ({ project }: Props) => {
  const [loading, setLoading] = useState(true);
  const [githubData, setGithubData] = useState(null);

  // Load github repo data
  useEffect(() => {
    window
      .fetch(`https://api.github.com/repos/${project.repo}`)
      .then((res) => {
        if (res.ok) return res;
        else throw new Error("Meh");
      })
      .then((res) => res.json())
      .then((data) => {
        setGithubData({
          created_at: moment(data.created_at),
          full_name: data.full_name,
          pushed_at: moment(data.pushed_at),
          html_url: data.html_url,
        });
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [project.repo]);

  return (
    <tr>
      <td>
        <RowTitle
          date={(githubData && githubData.created_at) || null}
          data-emoji={project.emoji}
        >
          {project.name}
        </RowTitle>
        <p>{project.description}</p>
      </td>
      <td className="links" style={{ "--label": '"Links"' }}>
        <Link icon="/link.svg" title={project.name} url={project.url} />
        <Repo repo={project.repo} githubData={githubData} />
      </td>
      <td style={{ "--label": '"Start date"' }}>
        <Date date={githubData && githubData.created_at} loading={loading} />
      </td>
      <td style={{ "--label": '"Last activity"' }}>
        <Date
          date={githubData && githubData.pushed_at}
          loading={loading}
          noLoader
        />
      </td>
    </tr>
  );
};

export default ProjectRow;
