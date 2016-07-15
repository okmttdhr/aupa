import request from 'superagent'
import utils from 'utils'
request
  .get(utils.uriSearch().youtube)
  .query({
    part: 'snippet',
    key: utils.apiKey().youtube,
  })
  .end((err, res) => {
    console.log(err)
    console.log(res)
  })

import React from 'react'
import { connect } from 'react-redux'

import DuckImage from '../assets/Duck.jpg'
import classes from './HomeView.scss'
import { doubleAsync } from '../modules/videos'

const mapActionCreators = {
  doubleAsync
}

const mapStateToProps = (state) => ({
  videos: state.videos
})

export const HomeView = (props) => (
  <div>
    <h4>{JSON.stringify(props, '  ')}</h4>
    <img
      alt='This is a duck, because Redux!'
      className={classes.duck}
      src={DuckImage} />
  </div>
)

export default connect(mapStateToProps, mapActionCreators)(HomeView)
