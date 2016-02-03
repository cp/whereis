import { ADD_CHECKINS } from './ActionTypes';

const initialState = {
  checkins: []
}

export default function Reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_CHECKINS:
      return {
        checkins: action.checkins
      }
    default:
      return state;
  }
}
