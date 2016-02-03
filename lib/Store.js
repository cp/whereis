import { createStore } from 'redux';
import Reducer from './Reducer';

export default function Store(initialState) {
  return createStore(Reducer, initialState);
}
