import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { selectVideo } from '../actions/select_active_video';

class SearchResult extends Component {
  render() {
    const { searchResult } = this.props;
    console.log(searchResult);
    if (!searchResult) { return null; }
    return (
      <p onClick={() => this.props.actions.selectVideo(searchResult.id.videoId)}>
        {searchResult.snippet.title}
      </p>);
  }
}

SearchResult.propTypes = {
  actions: React.PropTypes.object,
  searchResult: React.PropTypes.object,
};

const mapStateToProps = ({}) => ({});

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ selectVideo }, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchResult);
