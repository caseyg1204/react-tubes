export const VIDEO_SELECTED = 'VIDEO_SELECTED';

export const selectVideo = videoId =>
  dispatch => (
          dispatch({
            payload: videoId,
            type: VIDEO_SELECTED,
          })
      );
