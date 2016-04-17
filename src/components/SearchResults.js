import React, { Component } from 'react';
import { connect } from 'react-redux';

import VideoListItem from './VideoListItem';

class SearchResults extends Component {
  renderItems() {
    return (
      <div>
        <h2>Search Results</h2>
        {this.props.searchResults.items.map((searchResult, index) => (
          <VideoListItem searchResult={searchResult} key={index} />
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
  searchResults: React.PropTypes.object,
};

const mapStateToProps = ({ searchResults }) => ({ searchResults });

export default connect(mapStateToProps, () => ({}))(SearchResults);
