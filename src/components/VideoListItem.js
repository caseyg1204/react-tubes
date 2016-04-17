import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { selectVideo } from '../actions/select_active_video';
import { getStats } from '../actions/get_active_video_stats';

class VideoListItem extends Component {
  setAsActive = () => {
    const { searchResult } = this.props;
    const video = {
      id: searchResult.id.videoId,
      title: searchResult.snippet.title,
      description: searchResult.snippet.description,
      channel: searchResult.snippet.channelTitle,
      thumbnail: searchResult.snippet.thumbnails.high.url,
    };
    this.props.actions.selectVideo(video);
    this.props.actions.getStats(this.props.searchResult.id.videoId);
  }
  render() {
    const { searchResult } = this.props;
    if (!searchResult) { return null; }
    return (
      <div onClick={this.setAsActive} className="item">
        <img role="presentation" src={searchResult.snippet.thumbnails.high.url} />
        <div className="textBackground">
          <h3>{searchResult.snippet.title}</h3>
        </div>
      </div>);
  }
}

VideoListItem.propTypes = {
  actions: React.PropTypes.object,
  searchResult: React.PropTypes.object,
};

const mapStateToProps = ({}) => ({});

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ selectVideo, getStats }, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(VideoListItem);
