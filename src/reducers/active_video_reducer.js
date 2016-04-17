import { VIDEO_SELECTED } from '../actions/select_active_video';

const INITIAL_STATE = '';

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case VIDEO_SELECTED:
      console.log(action);
      return action.payload;

    default:
      return state;
  }
}
