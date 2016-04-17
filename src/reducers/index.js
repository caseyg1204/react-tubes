import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import searchResults from './search_results_reducer';
import activeVideo from './active_video_reducer';
import favorites from './favorites_reducer';

const rootReducer = combineReducers({
  form,
  searchResults,
  activeVideo,
  favorites,
});

export default rootReducer;
