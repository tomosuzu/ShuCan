import * as React from 'react';
import { addShucan, ShucanState } from './Shucan';
import { connect } from 'react-redux';
import { ReduxAction, ReduxState } from '../store';
import { Dispatch } from 'redux';

export interface HelloProps {
  value: ShucanState;
  actions: ActionDispatcher;
}

export class Hello extends React.Component<HelloProps, {}> {
  render() {
    return(
      <div>
        <h1>Welcome to ShuCan</h1>
        <p>My Shucan is {this.props.value.title}</p>
        <input
          type="text"
          onChange={ (e: React.FormEvent<HTMLInputElement>) => {
            this.props.actions.addShucan(e.currentTarget.value);
          } } />
      </div>
    );
  }
}

class ActionDispatcher {
  constructor(private dispatch: (action: ReduxAction) => void) {}

  public addShucan(title: string) {
    this.dispatch(addShucan(title));
  }
}

export default connect(
  (state: ReduxState) => ({ value: state.shucan }),
  (dispatch: Dispatch<ReduxAction>) => ({ actions: new ActionDispatcher(dispatch) }),
)(Hello);
