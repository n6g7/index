import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'

import loader from './loader.svg'

const aMonthAgo = moment().subtract(1, 'month')

class Project extends React.PureComponent {
  constructor (props) {
    super(props)

    this.state = props.project
  }

  componentDidMount () {
    this.setState({ loading: true })

    window.fetch(`https://api.github.com/repos/${this.state.repo}`)
    .then(res => {
      if (res.ok) return res
      else throw new Error('Meh')
    })
    .then(res => res.json())
    .then(data => this.setState({
      gh: {
        created_at: moment(data.created_at),
        full_name: data.full_name,
        pushed_at: moment(data.pushed_at),
        html_url: data.html_url
      },
      loading: false
    }))
    .catch(() => this.setState({ loading: false }))
  }

  renderURL () {
    const { name, url } = this.state
    const result = url.match(/^https?:\/\/([a-z0-9.-]+)(\/.+)?$/)

    return <a href={url} title={name}>
      {result ? result[1] : url}
    </a>
  }

  renderRepo () {
    const { gh, repo } = this.state

    return (gh && gh.html_url && gh.full_name)
      ? <a href={gh.html_url}>{gh.full_name}</a>
      : <span>{repo}</span>
  }

  renderStartDate () {
    const { gh, loading } = this.state

    return (gh && gh.created_at)
      ? <span>{gh.created_at.format('LL')}</span>
      : loading
        ? <img src={loader} alt='loader' />
        : <span className='error' />
  }

  renderLastActivityDate () {
    const { gh, loading } = this.state

    return (gh && gh.pushed_at)
      ? <span>{gh.pushed_at.format('LL')}</span>
      : loading
        ? <span />
        : <span className='error' />
  }

  render () {
    const {
      description,
      emoji,
      gh,
      name,
      url
    } = this.state

    const isNew = gh && gh.created_at && gh.created_at.isAfter(aMonthAgo)

    return <tr>
      <td>
        <h3 className={ isNew ? 'new' : ''}>{emoji} {name}</h3>
        <p>{description}</p>
      </td>
      <td>{ this.renderURL() }</td>
      <td>{ this.renderRepo() }</td>
      <td>{ this.renderStartDate() }</td>
      <td>{ this.renderLastActivityDate() }</td>
    </tr>
  }
}

Project.propTypes = {
  project: PropTypes.object.isRequired
}

export default Project
