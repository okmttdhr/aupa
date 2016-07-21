import request from 'superagent'
import utils from 'utils'
import constants from './constants'

export function getVideosAction() {
  return {
    type: constants.GET_VIDEOS,
  }
}

export function getVideosSuccessAction() {
  return {
    type: constants.GET_VIDEOS_SUCCESS,
  }
}

export function getVideosFailureAction() {
  return {
    type: constants.GET_VIDEOS_FAILURE,
  }
}

export const getVideos = () => {
  return (dispatch, getState) => {
    dispatch(getVideosAction())
    request
      .get(utils.uriSearch().youtube)
      .query({
        part: 'snippet',
        key: utils.apiKey().youtube,
      })
      .end((err, res) => {
        if (err) {
          console.log(err)
          dispatch(getVideosFailureAction())
        }
        console.log(res)
        dispatch(getVideosSuccessAction())
      })
  }
}
