import cookie from 'react-cookie';
import { FAVORITE_ADDED, FAVORITE_REMOVED } from '../actions/favorite_video';

const INITIAL_STATE = {};

const favorites = cookie.load('favorites');
Object.assign(INITIAL_STATE, favorites);

export default function (state = INITIAL_STATE, action) {
  const newState = Object.assign({}, state);
  const { payload } = action;
  switch (action.type) {
    case FAVORITE_ADDED:
      newState[action.payload.id] = payload;
      return newState;

    case FAVORITE_REMOVED:
      delete newState[action.payload.id];
      return newState;

    default:
      return state;
  }
}
