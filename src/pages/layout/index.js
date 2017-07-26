import React, { Component } from 'react'
import { Layout } from 'antd'
import Header from './header'
import SiderMenu from './siderMenu'
import './style.less'

const { Content, Sider } = Layout

export default class template extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <Layout>
        <Header />
        <Layout>
          <Sider width={200} style={{ background: '#fff', overflowX: 'hidden' }}>
            <SiderMenu />
          </Sider>
          <Layout>
            <Content>
              {this.props.children}
            </Content>
          </Layout>
        </Layout>
      </Layout>
    )
  }
}
