/*
 * @Author: huixie
 * @Date: 2017-07-25 11:24:49
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2017-07-25 16:27:47
 */

import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { logger, crashReporter } from 'reduxs/store/middleware'
import rootReducer from 'reduxs/reducers'

export default (initialState) => {
  const createStoreWithMiddleware = compose(
    applyMiddleware(
      thunk,
      logger,
      crashReporter,
    ),
    window.devToolsExtension ? window.devToolsExtension() : f => f,
  )(createStore)
  const store = createStoreWithMiddleware(rootReducer, initialState)

  // 热加载,及时跟新reducer
  if (module.hot) {
    module.hot.accept('reduxs/reducers', () => {
      const nextReducer = require('reduxs/reducers')
      store.replaceReducer(nextReducer)
    })
  }
  return store
}

