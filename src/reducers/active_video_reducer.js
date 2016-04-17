import { VIDEO_SELECTED } from '../actions/select_active_video';
import { STATS_SUCCESS } from '../actions/get_active_video_stats';

const INITIAL_STATE = { stats: { items: [] } };

export default function (state = INITIAL_STATE, action) {
  const newState = Object.assign({}, state);
  switch (action.type) {
    case VIDEO_SELECTED:
      Object.assign(newState, action.payload);
      newState.stats = {};
      return newState;

    case STATS_SUCCESS:
      newState.stats = action.payload.data;
      return newState;

    default:
      return state;
  }
}
