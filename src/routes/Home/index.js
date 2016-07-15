import { injectReducer } from '../../store/reducers'

export default (store) => ({
  path: '',
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      const HomeView = require('./components/HomeView').default
      const reducer = require('./modules/videos').default.reducer
      injectReducer(store, { key: 'videos', reducer })
      cb(null, HomeView)
    }, 'videos')
  }
})
