import constants from './constants'

const ACTION_HANDLERS = {
  [constants.GET_VIDEOS]: (state, action) => {
    console.log('g')
    return state
  },
  [constants.GET_VIDEOS_SUCCESS]: (state, action) => {
    console.log('s')
    return state
  },
  [constants.GET_VIDEOS_FAILURE]: (state, action) => {
    console.log('f')
    return state
  },
}

const initialState = {
  /**
   * items
    [{
      apiKey: <string>'youtube',
      videoId: string,
    }]
   */
  items: [],
  currentIndex: 0,
  playing: false,
  isFetching: false,
  errorMessage: null,
}

export default function reducer(state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]
  return handler ? handler(state, action) : state
}
