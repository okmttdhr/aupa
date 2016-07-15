// it's sucks to do `export default` in the action.js
import * as actions from './actions'

// reducer should export only reducer
import reducer from './reducers'

/**
 * import { actions } from 'modules/videos'
 * eg. actions.increment
 * eg. actions.doubleAsync
 *
 * import { reducer } from 'modules/videos'
 * eg. injectReducer(store, { key: 'videos', reducer })
 */
export default {
  actions,
  reducer,
}
