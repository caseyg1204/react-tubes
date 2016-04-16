import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { reduxForm } from 'redux-form';

import { search } from '../actions/search_action';

class SearchBox extends Component {
  componentWillMount() {
    console.log(this.props);
  }
  submitSearch = () => {
    console.log(this.props.fields.searchTerms.value);
    this.props.actions.search(this.props.fields.searchTerms.value);
  }

  render() {
    return (
      <form onSubmit={this.props.handleSubmit(this.submitSearch)}>
        <input type="text" {...this.props.fields.searchTerms} />
        <button onClick={this.search}>Search</button>
      </form>);
  }
}

SearchBox.propTypes = {
  fields: React.PropTypes.object,
  actions: React.PropTypes.object,
  handleSubmit: React.PropTypes.func,
  searchResults: React.PropTypes.object,
};

const mapStateToProps = ({ searchResults }) => ({ searchResults });

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ search }, dispatch),
  };
}

SearchBox = reduxForm({
  form: 'search',
  fields: ['searchTerms'],
}, mapStateToProps, mapDispatchToProps)(SearchBox);

export default SearchBox;
