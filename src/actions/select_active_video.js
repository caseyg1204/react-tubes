export const VIDEO_SELECTED = 'VIDEO_SELECTED';

export const selectVideo = video =>
  dispatch => (
    dispatch({
      payload: video,
      type: VIDEO_SELECTED,
    })
);
