// ActionCreator
import { Action } from 'redux';

enum ActionNames {
  ADD = 'shucan/add',
}

interface AddAction extends Action {
  title: string;
  repeat: number;
  endDate?: string;
  type: ActionNames.ADD;
}

export const addShucan =
  (title: string, repeat: RepeatType, options?: {endDate?: string}): AddAction => ({
    title,
    repeat,
    endDate: options && options.endDate,
    type: ActionNames.ADD,
  });

// enum
export enum RepeatType {
  once = 0,
  day = 1,
  week = 2,
  month = 3,
}

// reducer
export interface ShucansState {
  shucan: ShucanState[];
}

export interface ShucanState {
  title: string;
  repeat: number;
  endDate?: string;
}

export type ShucanActions = AddAction;

// @ts-ignore
const initialState:ShucansState = { shucan: JSON.parse(localStorage.getItem('Shucan')) || [] };

function reducer(state: ShucansState = initialState, action: ShucanActions): ShucansState {
  switch (action.type) {
    case ActionNames.ADD:
      const shucan = state.shucan;
      shucan.push({ title: action.title, repeat: action.repeat, endDate: action.endDate });
      const obj = JSON.stringify(shucan);
      localStorage.setItem('Shucan', obj);
      return { shucan };
    default:
      return state;
  }
}

export default reducer;
