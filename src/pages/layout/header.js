import React, { Component } from 'react'
import { Menu, Layout } from 'antd'

const { Header } = Layout

export default class template extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <Header className="header">
        <div className="logo" >基层基础管控平台</div>
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['2']}
          style={{ lineHeight: '64px' }}
        >
          <Menu.Item key="1">nav 1</Menu.Item>
          <Menu.Item key="2">nav 2</Menu.Item>
          <Menu.Item key="3">nav 3</Menu.Item>
        </Menu>
      </Header>
    )
  }
}
