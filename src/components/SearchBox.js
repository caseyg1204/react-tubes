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
    if (!this.state) return null;
    return this.state.sortOrder;
  }
  selectedSort = option => {
    this.setState({ sortOrder: option.id });
  }
  sortOptions = [
    { id: 'relevance', display: 'Relevance' },
    { id: 'date', display: 'Date' },
    { id: 'rating', display: 'Rating' },
  ]
  search = (terms, order, location, radius) => {
    this.props.actions.search(this.props.fields.searchTerms.value, order, location, radius);
  }
  submitSearch(event) {
    event.preventDefault();
    const { location, sortOrder } = this.state;
    const { searchTerms } = this.props.fields;
    if (!location) {
      this.search(searchTerms.value, sortOrder);
    } else {
      const locationString = `${location.location.lat},${location.location.lng}`;
      this.search(searchTerms.value, sortOrder, locationString, '20mi');
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
      <form onSubmit={this.props.handleSubmit(this.submitSearch)}>
        <input
          className="searchInput"
          type="text"
          {...this.props.fields.searchTerms}
          placeholder="enter search"
        />
        <div className="group">
          <div>OrderBy: </div>
          <div className="orderBy">
            <Select
              className="select"
              name="sortSelect"
              autosize
              onChange={this.selectedSort}
              options={this.sortOptions}
              valueKey="id"
              labelKey="display"
              value={this.state.sortOrder}
            />
          </div>
        </div>
        <div className=" group">
          <div>Location: </div>
          <div className="location">
            <Geosuggest
              className="geo"
              placeholder="Enter place to filter by location"
              onSuggestSelect={this.selectPlace}
              onChange={this.placeChange}
            />
          </div>
        </div>
        <div>
          <button onClick={this.submitSearch}>Search</button>
        </div>
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
