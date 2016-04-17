import axios from 'axios';
import { API_KEY } from '../constants/api';

export const SEARCH_SUCCESS = 'SEARCH_SUCCESS';
export const SEARCH_FAIL = 'SEARCH_FAIL';

export const search = (terms, sort, location, locationRadius) =>
  dispatch => (
    axios.get('https://www.googleapis.com/youtube/v3/search', {
      params: {
        part: 'snippet',
        key: API_KEY,
        type: 'video',
        q: terms,
        order: sort,
        location,
        locationRadius,
      },
    })
      .then(result => {
        dispatch({
          payload: result,
          type: SEARCH_SUCCESS,
        });
      })
      .catch(() => {
        dispatch({
          type: SEARCH_FAIL,
        });
      })
    );
