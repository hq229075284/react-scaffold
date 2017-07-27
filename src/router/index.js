import React, { Component } from 'react'
import {
  HashRouter as Router,
  // Route,
  // Prompt,
} from 'react-router-dom'
import Route from './route'
import Bundle from './bundle'

function asyncLoader(loader) {
  return props => (<Bundle load={loader}>
    {Comp => <Comp {...props} />}
  </Bundle>)
}

// 异步组件加载器
const testloader = require('bundle-loader?lazy&name=test!@routerView/test')
/* eslint-disable */
// const testloader = (cb)=> import(/*webpackChunkName:'myname'*/'pages/test').then(context=>cb(context))
/* eslint-enable */
// 异步组件加载
// const asyncTest = props => (<Bundle load={testloader}>
//   {Comp => <Comp {...props} />}
// </Bundle>);

const asyncTest = asyncLoader(testloader)

const Home = (props) => {
  console.log(props)
  return (
    <div>
      <h2>Home</h2>
    </div>)
}


class routerMap extends Component {
  constructor(props) {
    super(props)
    this.state = {}
    this.getConfirmation = this.getConfirmation.bind(this)
  }
  getConfirmation(message, callback) {
    let allowTransition = true
    if (message) {
      allowTransition = window.confirm(message)
    }
    callback(allowTransition)
  }
  render() {
    return (
      <Router getUserConfirmation={this.getConfirmation} >
        <div>
          <Route exact path="/" component={Home} />
          <Route exact path="/test" component={asyncTest} />
        </div>
      </Router>
    )
  }
}
export default routerMap
