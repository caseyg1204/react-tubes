import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import searchResults from './search_results_reducer';

const rootReducer = combineReducers({
  form,
  searchResults,
});

export default rootReducer;
