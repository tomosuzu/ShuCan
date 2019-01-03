import { createStore, combineReducers, Action } from 'redux';
import Shucan, { ShucanState, ShucanActions } from './components/Shucan';

export default createStore(
  combineReducers({
    Shucan,
  }),
);

export type ReduxState = {
  Shucan : ShucanState,
};

export type ReduxAction = ShucanActions | Action;
