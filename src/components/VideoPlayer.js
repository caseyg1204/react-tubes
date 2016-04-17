import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class VideoPlayer extends Component {
  render() {
    const iframe = {
      __html: '<iframe width="640" height="360"' +
        `src="//www.youtube.com/embed/${this.props.activeVideo}"` +
        'frameborder="0" allowfullscreen></iframe>',
    };
    if (!this.props.activeVideo) { return null; }
    return (
        <div dangerouslySetInnerHTML={ iframe } />
      );
  }
}

VideoPlayer.propTypes = {
  actions: React.PropTypes.object,
  activeVideo: React.PropTypes.string,
};

const mapStateToProps = ({ activeVideo }) => ({ activeVideo });

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({}, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(VideoPlayer);
