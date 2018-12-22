// ActionCreator
import { Action } from 'redux';

enum ActionNames {
  ADD = 'shucan/add',
}

interface AddAction extends Action {
  title: string;
  type: ActionNames.ADD;
}
export const addShucan = (title: string): AddAction => ({
  title,
  type: ActionNames.ADD,
});

// reducer
export interface ShucanState {
  title: string;
}

export type ShucanActions = AddAction;

const initialState:ShucanState = { title : '' };

function reducer(state: ShucanState = initialState, action: ShucanActions): ShucanState {
  switch (action.type) {
    case ActionNames.ADD:
      return { title: action.title };
    default:
      return state;
  }
}

export default reducer;
