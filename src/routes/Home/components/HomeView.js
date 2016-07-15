import React from 'react'
import DuckImage from '../assets/Duck.jpg'
import classes from './HomeView.scss'

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

export const HomeView = () => (
  <div>
    <h4>Welcome!</h4>
    <img
      alt='This is a duck, because Redux!'
      className={classes.duck}
      src={DuckImage} />
  </div>
)

export default HomeView
