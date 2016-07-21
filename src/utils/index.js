import * as config from './config'

/**
 * 非同期処理に必要な定数を生成する
 * @param {String} _constant 定数の名前 例: ASYNC_GET
 * @return {Object} 非同期処理に必要な3つの定数 ASYNC_GET, ASYNC_GET_SUCCESS, ASYNC_GET_FAILURE
 **/
export function createAsyncConstants(_constant) {
  return {
    [_constant]: _constant,
    [`${_constant}_SUCCESS`]: `${_constant}_SUCCESS`,
    [`${_constant}_FAILURE`]: `${_constant}_FAILURE`,
  }
}

/**
 * 4種のメソッドに必要な定数を生成する
 * @param {String} rawConstants 定数の生成元となる文字列の可変長引数
 * @return {
   GET_USERS,    GET_USERS_SUCCESS,    GET_USERS_FAILURE,
   POST_USERS,   POST_USERS_SUCCESS,   POST_USERS_FAILURE,
   PUT_USERS,    PUT_USERS_SUCCESS,    PUT_USERS_FAILURE,
   DELETE_USERS, DELETE_USERS_SUCCESS, DELETE_USERS_FAILURE,
 }
 **/
export function createRESTConstants(...rawConstants) {
  const RESTConstants = rawConstants.reduce((previsiousConstants, currentConstant) => {
    return {
      ...createAsyncConstants(`GET_${currentConstant}`),
      ...createAsyncConstants(`POST_${currentConstant}`),
      ...createAsyncConstants(`PUT_${currentConstant}`),
      ...createAsyncConstants(`DELETE_${currentConstant}`),
      ...previsiousConstants,
    }
  }, {})
  return RESTConstants
}

export default {
  ...config
}
