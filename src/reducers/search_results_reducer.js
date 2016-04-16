import { SEARCH_FAIL, SEARCH_SUCCESS } from '../actions/search_action';

const INITIAL_STATE = {};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case SEARCH_FAIL:
      return {};

    case SEARCH_SUCCESS:
      return action.payload.data;

    default:
      return state;
  }
}
