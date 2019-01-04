import { createStore, combineReducers, Action } from 'redux';
import Shucan, { ShucansState, ShucanActions } from './components/Shucan';

export default createStore(
  combineReducers({
    Shucan,
  }),
);

export type ReduxState = {
  Shucan : ShucansState,
};

export type ReduxAction = ShucanActions | Action;
