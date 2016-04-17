import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import searchResults from './search_results_reducer';
import activeVideo from './active_video_reducer';

const rootReducer = combineReducers({
  form,
  searchResults,
  activeVideo,
});

export default rootReducer;
