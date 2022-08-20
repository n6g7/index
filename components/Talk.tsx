import React from "react";
import { Link } from "@as0n/layout";

import { Date, RowTitle } from "./atoms";
import { Talk } from "../lib/types";

interface Props {
  talk: Talk;
}

const Talk = ({ talk }: Props) => {
  return (
    <tr>
      <td>
        <RowTitle date={talk.date} data-emoji={talk.emoji}>
          {talk.title}
        </RowTitle>
        <p>{talk.conference}</p>
      </td>
      <td className="links" style={{ "--label": '"Links"' }}>
        {talk.slides && (
          <Link
            title={talk.title}
            url={`/slides/${talk.slides}`}
            text={talk.slides}
            icon="/projector.svg"
          />
        )}
        <Link title={talk.title} url={talk.video} icon="/tv.svg" />
      </td>
      <td style={{ "--label": '"Date"' }}>
        <Date date={talk.date} />
      </td>
    </tr>
  );
};

export default Talk;
