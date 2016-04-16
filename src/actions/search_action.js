import axios from 'axios';

export const SEARCH_SUCCESS = 'SEARCH_SUCCESS';
export const SEARCH_FAIL = 'SEARCH_FAIL';

export const search = terms =>
  dispatch => (
      axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&key=AIzaSyAsT4UwL5u0WeRuMtUkNbOxyKqKkxilKus&q=${terms}`)
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
