import React, { Component } from 'react'
import 'style/base.less'
import { chainFetchByPost } from 'utils/ajax'
import Layout from 'pages/layout'
import RouterView from '@router'


export default class App extends Component {
  constructor(props, ...other) {
    console.log(other)
    super(props)
    this.state = {}
  }

  async componentWillMount() {
    const response = await chainFetchByPost()
      .url('/home')
      .sendData({ a: 1 })
      // .then((response) => {
      //   console.log(response);
      // });
    console.log(response)
  }

  render() {
    return (
      <Layout>
        <RouterView />
      </Layout>
    )
  }
}
