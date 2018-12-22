import { createStore, combineReducers, Action } from 'redux';
import shucan, { ShucanState, ShucanActions } from './components/Shucan';

export default createStore(
  combineReducers({
    shucan,
  }),
);

export type ReduxState = {
  shucan : ShucanState,
};

export type ReduxAction = ShucanActions | Action;
