/*
 * @Author: huixie
 * @Date: 2017-07-25 15:21:49
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2017-07-25 16:22:17
 */
import { handleActions } from 'redux-actions';

export const createPublicReducer = (actionType, initialState) => handleActions(
  { [actionType]: (state, action) => ({ ...action.payload }) },
  { ...initialState },
);
