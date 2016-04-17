import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import VideoPlayer from './VideoPlayer';
import Favorite from './Favorite';

import { search } from '../actions/search_action';

class NowPlaying extends Component {
  renderStats() {
    const { stats } = this.props.activeVideo;
    if (!stats.items || !stats.items.length || !stats.items[0].statistics) { return null; }
    const counts = stats.items[0].statistics;
    return (
      <div className="stats">
        <div><span>Comments</span> {counts.commentCount}</div>
        <div><span>Likes</span> {counts.likeCount}</div>
        <div><span>Views</span> {counts.viewCount}</div>
        <div><span>Favorites</span> {counts.favoriteCount}</div>
        <div><span>Dislikes</span> {counts.dislikeCount}</div>
      </div>);
  }
  render() {
    const video = this.props.activeVideo;
    if (!this.props.activeVideo.id || !this.props.activeVideo.id.videoId) { return null; }
    return (
      <div>
        <h2>{video.snippet.title}</h2>
        <h3>{video.snippet.description}</h3>
        <Favorite video={video} />
        <VideoPlayer />
        {this.renderStats()}
      </div>);
  }
}

NowPlaying.propTypes = {
  fields: React.PropTypes.object,
  actions: React.PropTypes.object,
  handleSubmit: React.PropTypes.func,
  searchResults: React.PropTypes.object,
  activeVideo: React.PropTypes.object,
};

const mapStateToProps = ({ activeVideo }) => ({ activeVideo });

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ search }, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(NowPlaying);
