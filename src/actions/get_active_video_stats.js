import axios from 'axios';
import { API_KEY } from '../constants/api';

export const STATS_SUCCESS = 'STATS_SUCCESS';
export const STATS_FAIL = 'STATS_FAIL';

export const getStats = videoId =>
  dispatch => (
    axios.get('https://www.googleapis.com/youtube/v3/videos', {
      params: {
        part: 'statistics',
        key: API_KEY,
        id: videoId,
      },
    })
      .then(result => {
        dispatch({
          payload: result,
          type: STATS_SUCCESS,
        });
      })
      .catch(() => {
        dispatch({
          type: STATS_FAIL,
        });
      })
  );
