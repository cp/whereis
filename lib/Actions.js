import * as types from './ActionTypes';

export function addCheckins(checkins) {
  return { type: types.ADD_CHECKINS, checkins: checkins };
}
