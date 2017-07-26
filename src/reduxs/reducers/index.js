/*
 * @Author: huixie
 * @Date: 2017-07-25 14:12:19
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2017-07-25 16:21:43
 */

import { combineReducers } from 'redux'

import * as user from './user'

const rootReducer = combineReducers({
  config: (state = {}) => state,
  ...user, // 用户管理模块
})

export default rootReducer
