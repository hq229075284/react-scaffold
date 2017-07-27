import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  Route,
  withRouter,
  // Redirect,
} from 'react-router-dom'

// 重定向路径
// const redirectUrl = '/'

class WrapComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isRender: true, // 是否渲染当前router组件，如果为fasle则路由重定向
    }
  }
  // 类似于router2.0的onEnter
  componentWillMount() {
    if (typeof (this.props.onEnter) === 'function') {
      this.state.isRender = !!this.props.onEnter(this.props.history)
    }
    // this.props.history.block((nextLocation /* action */) => {
    //   console.log('nextLocation:', nextLocation)
    //   return '123?'
    // })
  }
  // 类似于router2.0的onEnter
  componentDidMount() { }
  // 类似于router2.0的onUpdate
  componentWillReceiveProps(nextProps) { console.log(nextProps) }
  // 类似于router2.0的onLeave
  componentWillUnmount() {
    if (typeof (this.props.onLeave) === 'function') {
      this.props.onLeave(this.props.history)
    }
  }
  render() {
    const { component: WrappedComponent, ...other } = this.props
    const { isRender } = this.state
    console.log('currentUrl:', this.props.match.url)
    return isRender ? <WrappedComponent {...other} /> : null
  }
}

const route = ({ component, onEnter, onLeave, ...rest }) => {
  console.log(rest)
  return (<Route
    {...rest}
    render={props => <WrapComponent {...props} component={component} onEnter={onEnter} onLeave={onLeave} />}
  />)
}

// export default route;
// export default connect(
//   state => ({ config: state.config }),
// )(route);
export default withRouter(connect(
  state => ({ config: state.config }),
)(route))

