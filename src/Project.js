import React from "react"
import PropTypes from "prop-types"
import moment from "moment-he"

import { Date, Link, RowTitle } from "./atoms"

class Project extends React.PureComponent {
  static propTypes = {
    data: PropTypes.object.isRequired,
  }

  constructor(props) {
    super(props)

    this.state = props.data
  }

  componentDidMount() {
    this.setState({ loading: true })

    window
      .fetch(`https://api.github.com/repos/${this.state.repo}`)
      .then(res => {
        if (res.ok) return res
        else throw new Error("Meh")
      })
      .then(res => res.json())
      .then(data =>
        this.setState({
          gh: {
            created_at: moment(data.created_at),
            full_name: data.full_name,
            pushed_at: moment(data.pushed_at),
            html_url: data.html_url,
          },
          loading: false,
        }),
      )
      .catch(() => this.setState({ loading: false }))
  }

  renderRepo() {
    const { gh, repo } = this.state

    return gh && gh.html_url && gh.full_name ? (
      <a href={gh.html_url} target="blank" className="repository">
        {gh.full_name}
      </a>
    ) : (
      <span className="repository">{repo}</span>
    )
  }

  render() {
    const { description, emoji, gh, loading, name, url } = this.state

    return (
      <tr>
        <td>
          <RowTitle date={(gh && gh.created_at) || null} data-emoji={emoji}>
            {name}
          </RowTitle>
          <p>{description}</p>
        </td>
        <td className="links" style={{ "--label": '"Links"' }}>
          <Link className="homepage" title={name} url={url} />
          {this.renderRepo()}
        </td>
        <td style={{ "--label": '"Start date"' }}>
          <Date date={gh && gh.created_at} loading={loading} />
        </td>
        <td style={{ "--label": '"Last activity"' }}>
          <Date date={gh && gh.pushed_at} loading={loading} noLoader />
        </td>
      </tr>
    )
  }
}

export default Project
