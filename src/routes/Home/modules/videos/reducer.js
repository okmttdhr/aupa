import { COUNTER_INCREMENT } from 'constants'

const ACTION_HANDLERS = {
  [COUNTER_INCREMENT]: (state, action) => state + action.payload
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
