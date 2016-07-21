import React from 'react'
import classes from './style.scss'

import makeVideoPlayableInline from 'iphone-inline-video'

window.onload = () => {
  setTimeout(() => {
    const iframe = document.querySelectorAll('iframe')[4]
    const video = iframe.contentWindow.document.querySelector('video')
    console.log(video)
    video.setAttribute('webkit-playsinline')
    makeVideoPlayableInline(video)
  }, 5000)
}

export const Video = (props) => (
  <div className={classes.Video}>
    <iframe width='420' height='345' frameBorder='0' src={props.embedSrc} />
  </div>
)

Video.propTypes = {
  embedSrc: React.PropTypes.string.isRequired,
}

export default Video
