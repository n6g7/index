import React from "react"
import PropTypes from "prop-types"

import { Date, Link, RowTitle } from "./atoms"

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
            <Link className="slides" title={title} url={`/slides/${slides}`} text={slides} />
          )}
          <Link className="video" title={title} url={video} />
        </td>
        <td style={{ "--label": '"Date"' }}>
          <Date date={date} />
        </td>
      </tr>
    )
  }
}

export default Talk
