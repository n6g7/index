import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment-he'
import styled, { css } from 'styled-components'

import loader from './loader.svg'

const Title = styled.h3`
  font-size: inherit;
  line-height: 1;
  margin: 0;

  ${p => p.new && css`
    &::after {
      background: ${p.theme.colours.yellow};
      border-radius: 3px;
      color: white;
      content: 'New';
      font-size: 0.8em;
      font-weight: bolder;
      letter-spacing: 0.5px;
      margin: 0 ${p.theme.spacing/2}px;
      padding: 2px 5px;
    }
  `}
`

const ErrorSpan = styled.span`
  border-bottom: 1px ${p => p.theme.colours.grey} solid;
  display: inline-block;
  width: ${p => 2 * p.theme.spacing}px;
`

const aMonthAgo = moment().subtract(1, 'month')

class Project extends React.PureComponent {
  static propTypes = {
    project: PropTypes.object.isRequired
  }

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
      ? <span>{gh.created_at.humanEra('LL')}</span>
      : loading
        ? <img src={loader} alt='loader' />
        : <ErrorSpan />
  }

  renderLastActivityDate () {
    const { gh, loading } = this.state

    return (gh && gh.pushed_at)
      ? <span>{gh.pushed_at.humanEra('LL')}</span>
      : loading
        ? <span />
        : <ErrorSpan />
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
        <Title new={isNew}>{emoji} {name}</Title>
        <p>{description}</p>
      </td>
      <td>{ this.renderURL() }</td>
      <td>{ this.renderRepo() }</td>
      <td>{ this.renderStartDate() }</td>
      <td>{ this.renderLastActivityDate() }</td>
    </tr>
  }
}

export default Project
