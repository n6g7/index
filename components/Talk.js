import React from "react"
import PropTypes from "prop-types"
import { Link } from "@as0n/layout"

import { Date, RowTitle } from "./atoms"

class Talk extends React.PureComponent {
  static propTypes = {
    data: PropTypes.object.isRequired,
  }

  render() {
    const { title, conference, emoji, video, date, slides } = this.props.data

    return (
      <tr>
        <td>
          <RowTitle date={date} data-emoji={emoji}>
            {title}
          </RowTitle>
          <p>{conference}</p>
        </td>
        <td className="links" style={{ "--label": '"Links"' }}>
          {slides && (
            <Link title={title} url={`/slides/${slides}`} text={slides} icon="/projector.svg" />
          )}
          <Link title={title} url={video} icon="/tv.svg" />
        </td>
        <td style={{ "--label": '"Date"' }}>
          <Date date={date} />
        </td>
      </tr>
    )
  }
}

export default Talk
