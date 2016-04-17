import { FAVORITE_ADDED, FAVORITE_REMOVED } from '../actions/favorite_video';

const INITIAL_STATE = {};

export default function (state = INITIAL_STATE, action) {
  const newState = Object.assign({}, state);
  switch (action.type) {
    case FAVORITE_ADDED:
      newState[action.payload] = true;
      return newState;

    case FAVORITE_REMOVED:
      newState[action.payload] = false;
      return newState;

    default:
      return state;
  }
}
