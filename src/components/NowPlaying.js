import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import VideoPlayer from './VideoPlayer';

import { search } from '../actions/search_action';

class NowPlaying extends Component {
  renderStats() {
    const { stats } = this.props.activeVideo;
    if (!stats.items || !stats.items.length || !stats.items[0].statistics) { return null; }
    const counts = stats.items[0].statistics;
    return (
      <div>
        <p>Comments {counts.commentCount}</p>
        <p>Likes {counts.likeCount}</p>
        <p>Views {counts.viewCount}</p>
        <p>Favorites {counts.favoriteCount}</p>
        <p>Dislikes {counts.dislikeCount}</p>
      </div>);
  }
  render() {
    const video = this.props.activeVideo.snippet;
    if (!this.props.activeVideo.id || !this.props.activeVideo.id.videoId) { return null; }
    return (<div>
      <h1>{video.title}</h1>
      <h2>{video.description}</h2>
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
