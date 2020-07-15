import PropTypes from 'prop-types'
import React from 'react'

export default class HTMLPreview extends React.PureComponent {
  static propTypes = {
    subtitle: PropTypes.node
  }

  render() {
    const {subtitle} = this.props
    return <div dangerouslySetInnerHTML={{__html: subtitle}} >
    </div>
  }
}