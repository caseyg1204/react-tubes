import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class VideoPlayer extends Component {
  render() {
    if (!this.props.activeVideo.id || !this.props.activeVideo.id.videoId) { return null; }
    const iframe = {
      __html: '<iframe width="640" height="360"' +
      `src="//www.youtube.com/embed/${this.props.activeVideo.id.videoId}"` +
      'frameborder="0" allowfullscreen></iframe>',
    };
    return (
        <div dangerouslySetInnerHTML={ iframe } />
      );
  }
}

VideoPlayer.propTypes = {
  actions: React.PropTypes.object,
  activeVideo: React.PropTypes.object,
};

const mapStateToProps = ({ activeVideo }) => ({ activeVideo });

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({}, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(VideoPlayer);
