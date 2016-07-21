// it's sucks to do `export default` in the action.js
import * as actions from './action'

// reducer should export only reducer
import reducer from './reducer'

/**
 * import videosModule from 'modules/videos'
 * eg.
   const mapActionCreators = {
    increment: () => videosModule.increment(1),
    doubleAsync: videosModule.doubleAsync,
   }
 * import videosModule from 'modules/videos'
 * eg. injectReducer(store, { key: 'videos', videosModule.reducer })
 */
export default {
  ...actions,
  reducer,
}
