import React from 'react'
import { connect } from 'react-redux'

import classes from './HomeView.scss'
import DuckImage from '../assets/Duck.jpg'

import videosModule from '../modules/videos'
import Video from 'components/Video'

const mapActionCreators = {
  getVideos: videosModule.getVideos,
}

const mapStateToProps = (state) => ({
  videos: state.videos
})

const embedSrcTest = {
  youtube: 'http://www.youtube.com/embed/WSinMOs5eGw',
  giphy: 'http://giphy.com/embed/liBj9iFHAPNMk',
  vimeo: 'http://player.vimeo.com/video/87742822?title=0&byline=0&portrait=0',
  facebook: `http://www.facebook.com/plugins/video.php?
    href=https%3A%2F%2Fwww.facebook.com%2Fhashlyve%2Fvideos%2F596253087201416%2F&show_text=0&width=400`,
  vine: 'http://vine.co/v/57tP3HpJuqu/embed/simple',
}

export class HomeView extends React.Component {
  static propTypes = {
    getVideos: React.PropTypes.func.isRequired,
  }

  componentDidMount() {
    this.props.getVideos()
  }

  render() {
    return (
      <div>
        <img className={classes.duck} src={DuckImage} />
        <h4>{JSON.stringify(this.props, ' ')}</h4>
        <Video embedSrc={embedSrcTest.youtube} />
        <Video embedSrc={embedSrcTest.giphy} />
        <Video embedSrc={embedSrcTest.vimeo} />
        <Video embedSrc={embedSrcTest.facebook} />
        <Video embedSrc={embedSrcTest.vine} />
      </div>
    )
  }
}

export default connect(mapStateToProps, mapActionCreators)(HomeView)
