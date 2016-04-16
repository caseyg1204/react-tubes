import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { reduxForm } from 'redux-form';

class SearchResults extends Component {
  componentWillMount() {
  }
  renderItems() {
    return (
      <div>
      {this.props.searchResults.items.map(result => (
        <p>{result.snippet.title}</p>
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
  fields: React.PropTypes.object,
  actions: React.PropTypes.object,
  handleSubmit: React.PropTypes.func,
  searchResults: React.PropTypes.object,
};

const mapStateToProps = ({ searchResults }) => ({ searchResults });

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ }, dispatch),
  };
}

SearchResults = reduxForm({
  form: 'search',
  fields: ['searchTerms'],
}, mapStateToProps, mapDispatchToProps)(SearchResults);

export default SearchResults;
