import React, { Component } from 'react'
import { Button, Icon } from 'antd'
import { withRouter } from 'react-router-dom'

class test extends Component {
  constructor(props) {
    super(props)
    this.state = {}
    this.onClick = this.onClick.bind(this)
  }
  onClick() {
    console.log('props', this.props)
    this.props.history.push({
      pathname: '/',
      state: '123',
      search: '?some=search-string',
    })
  }
  render() {
    return (
      <div>
        <Button type="primary" onClick={this.onClick}><Icon type="down-square" />test</Button>
      </div>
    )
  }
}

export default withRouter(test)
