// it's sucks to do `export default` in the action.js
import * as actions from './action'

// reducer should export only reducer
import reducer from './reducer'

/**
 * import { increment, doubleAsync } from 'modules/videos'
 * eg.
   const mapActionCreators = {
    increment: () => increment(1),
    doubleAsync,
   }
 * import { reducer } from 'modules/videos'
 * eg. injectReducer(store, { key: 'videos', reducer })
 */
export default {
  ...actions,
  reducer,
}
