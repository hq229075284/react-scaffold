import React, { Component } from 'react'
// import { Button, Icon } from 'antd'
import { Prompt } from 'react-router-dom'
import Test2 from './test2'

export default class test extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isShowDialog: true,
    }
    // this.onClick = this.onClick.bind(this)
  }

  // onClick() {
  //   console.log('props', this.props)
  //   this.props.history.push('/')
  // }
  render() {
    return (
      // <div>
      //   <Button type="primary" onClick={this.onClick}><Icon type="down-square" />test</Button>
      // </div>
      <div>
        <Prompt
          when={this.state.isShowDialog}
          message="Are you sure you want to leave?"
        />
        <Test2 />
      </div>
    )
  }
}
