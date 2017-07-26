import React from 'react'
import {
  HashRouter as Router,
  // Route,
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

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
)

const getConfirmation = (message, callback) => {
  const allowTransition = window.confirm(message)
  callback(allowTransition)
}

const routerMap = () => (
  <Router getUserConfirmation={getConfirmation}>
    <div>
      <Route exact path="/test" component={asyncTest} />
      <Route exact path="/home" component={Home} />
    </div>
  </Router>
)
export default routerMap
