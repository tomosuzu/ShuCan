// ActionCreator
import { Action } from 'redux';

enum ActionNames {
  ADD = 'shucan/add',
}

interface AddAction extends Action {
  title: string;
  repeat: number;
  type: ActionNames.ADD;
}

export const addShucan = (title: string, repeat: RepeatType): AddAction => ({
  title,
  repeat,
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
export interface ShucanState {
  shucan: {
    title: string;
    repeat: number;
  }[];
}

export type ShucanActions = AddAction;

const initialState:ShucanState = { shucan: [] };

function reducer(state: ShucanState = initialState, action: ShucanActions): ShucanState {
  switch (action.type) {
    case ActionNames.ADD:
      const shucan = state.shucan;
      shucan.push({ title: action.title, repeat: action.repeat });
      return { shucan };
    default:
      return state;
  }
}

export default reducer;
