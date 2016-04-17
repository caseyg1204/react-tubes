export const FAVORITE_REMOVED = 'FAVORITE_REMOVED';
export const FAVORITE_ADDED = 'FAVORITE_ADDED';

export const addFavorite = video =>
  dispatch => (
          dispatch({
            payload: video,
            type: FAVORITE_ADDED,
          })
      );

export const removeFavorite = video =>
  dispatch => (
          dispatch({
            payload: video,
            type: FAVORITE_REMOVED,
          })
      );
