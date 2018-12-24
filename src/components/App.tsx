import * as React from 'react';
import { addShucan, ShucanState } from './Shucan';
import { connect } from 'react-redux';
import { ReduxAction, ReduxState } from '../store';
import { Dispatch } from 'redux';

export interface HelloProps {
  value: ShucanState;
  actions: ActionDispatcher;
}

export interface HelloState {
  title: string;
}

export class Hello extends React.Component<HelloProps, HelloState> {
  constructor(props:any) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.save = this.save.bind(this);
  }
  public state: HelloState = {
    title: '',
  };

  private handleChange(event:any) {
    this.setState({ title: event.target.value });
  }

  private save() {
    this.props.actions.addShucan(this.state.title);
  }

  render() {
    return(
      <div>
        <h1>Welcome to ShuCan</h1>
        <label>
          Title:
          {this.state.title}
          <input
            type="text"
            value={this.state.title}
            onChange={this.handleChange}
            />
          {this.props.value.shucan.length > 0 && this.props.value.shucan[0].title}
        </label>
        <button onClick={this.save}/>
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
