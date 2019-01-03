import { createStore, combineReducers, Action } from 'redux';
import Shucan, { ShucanState, ShucanActions } from './components/Shucan';

export default createStore(
  combineReducers({
    Shucan,
  }),
);

export type ReduxState = {
  shucan : ShucanState,
};

export type ReduxAction = ShucanActions | Action;
