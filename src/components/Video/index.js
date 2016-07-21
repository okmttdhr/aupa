import React from 'react'
import classes from './style.scss'

export const Video = (props) => (
  <div className={classes.Video}>
    <iframe width='420' height='345' frameBorder='0' src={props.embedSrc} />
  </div>
)

Video.propTypes = {
  embedSrc: React.PropTypes.string.isRequired,
}

export default Video
