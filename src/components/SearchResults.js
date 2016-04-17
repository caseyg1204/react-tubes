import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { selectVideo } from '../actions/select_active_video';

class SearchResults extends Component {
  componentWillMount() {
  }
  renderItems() {
    return (
      <div>
      {this.props.searchResults.items.map((result, index) => (
        <p key={index}
          onClick={() => this.props.actions.selectVideo(result.id.videoId)}
        >{result.snippet.title}</p>
      ))}
      </div>
    );
  }
  render() {
    if (!this.props.searchResults || !this.props.searchResults.items) { return null; }
    return this.renderItems();
  }
}

SearchResults.propTypes = {
  actions: React.PropTypes.object,
  handleSubmit: React.PropTypes.func,
  searchResults: React.PropTypes.object,
};

const mapStateToProps = ({ searchResults }) => ({ searchResults });

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ selectVideo }, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchResults);
