import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { reduxForm } from 'redux-form';
import Select from 'react-select';
import Geosuggest from 'react-geosuggest';

import { search } from '../actions/search_action';

class SearchBox extends Component {
  constructor() {
    super();
    this.submitSearch = this.submitSearch.bind(this);
  }
  componentWillMount = () => {
    this.setState({ sortOrder: this.sortOptions[0].id });
  }
  getSortValue() {
    if (!this.state) {return null;}
    return this.state.sortOrder;
  }
  selectedSort = option => {
    this.setState({ sortOrder: option.id });
    if (!this.props.fields.searchTerms.value) {return;}
    this.search(this.props.fields.searchTerms.value, option.id);
  }
  sortOptions = [
    { id: 'relevance', display: 'Relevance' },
    { id: 'date', display: 'Date' },
    { id: 'rating', display: 'Rating' },
  ]
  search = (terms, order, location, radius) => {
    this.props.actions.search(this.props.fields.searchTerms.value, order, location, radius);
  }
  submitSearch(terms) {
    const { location } = this.state;
    const { searchTerms } = this.props.fields;
    if (!location) {
      this.search(terms.searchTerms, this.state.sortOrder);
    } else {
      const locationString = `${location.location.lat},${location.location.lng}`;
      this.search(searchTerms.value, this.state.sortOrder, locationString, '20mi');
    }
  }
  selectPlace = location => {
    this.setState({ location });
  }
  placeChange = value => {
    if (!value) {
      this.setState({ location: null });
    }
  }

  render() {
    return (
      <div>
        <form onSubmit={this.props.handleSubmit(this.submitSearch)}>
          <input type="text" {...this.props.fields.searchTerms} />
          <button onClick={this.submitSearch} type="button">Search</button>
          <Select
            name="sortSelect"
            autosize
            onChange={this.selectedSort}
            options={this.sortOptions}
            valueKey="id"
            labelKey="display"
            value={this.state.sortOrder}
          />
          <div className="geo">
          <Geosuggest
            placeholder="Enter place to filter by location"
            onSuggestSelect={this.selectPlace}
            onChange={this.placeChange}
          />
          </div>
        </form>
      </div>);
  }
}

SearchBox.propTypes = {
  fields: React.PropTypes.object,
  actions: React.PropTypes.object,
  handleSubmit: React.PropTypes.func,
  searchResults: React.PropTypes.object,
  sortSearch: React.PropTypes.string,
};

const mapStateToProps = ({ searchResults, sortSearch }) => ({ searchResults, sortSearch });

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
