import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { selectVideo } from '../actions/select_active_video';
import { getStats } from '../actions/get_active_video_stats';

class FavoriteListItem extends Component {
  setAsActive = () => {
    this.props.actions.selectVideo(this.props.video);
    this.props.actions.getStats(this.props.video.id);
  }
  render() {
    const { video } = this.props;
    if (!video) { return null; }
    return (
      <div onClick={this.setAsActive} className="item">
        <img role="presentation" src={video.thumbnail} />
        <div className="textBackground">
          <h3>{video.title}</h3>
        </div>
      </div>);
  }
}

FavoriteListItem.propTypes = {
  actions: React.PropTypes.object,
  video: React.PropTypes.object,
};

const mapStateToProps = ({}) => ({});

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ selectVideo, getStats }, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(FavoriteListItem);
