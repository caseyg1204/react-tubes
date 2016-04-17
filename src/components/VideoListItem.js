import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { selectVideo } from '../actions/select_active_video';
import { getStats } from '../actions/get_active_video_stats';

class VideoListItem extends Component {
  setAsActive = () => {
    this.props.actions.selectVideo(this.props.searchResult);
    this.props.actions.getStats(this.props.searchResult.id.videoId);
  }
  render() {
    const { searchResult } = this.props;
    if (!searchResult) { return null; }
    return (
      <p onClick={this.setAsActive}>
        {searchResult.snippet.title}
      </p>);
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
