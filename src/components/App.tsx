import * as React from 'react';
import { addShucan, ShucanState, RepeatType } from './Shucan';
import { connect } from 'react-redux';
import { ReduxAction, ReduxState } from '../store';
import { Dispatch } from 'redux';

export interface HelloProps {
  value: ShucanState;
  actions: ActionDispatcher;
}

export interface HelloState {
  title: string;
  repeat: RepeatType;
}

export class Hello extends React.Component<HelloProps, HelloState> {
  constructor(props:any) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.save = this.save.bind(this);
  }
  public state: HelloState = {
    title: '',
    repeat: RepeatType.once,
  };

  private handleChange(event:any) {
    // @ts-ignore
    this.setState({ [event.target.name]: event.target.value });
  }

  private save() {
    this.props.actions.addShucan(this.state.title, this.state.repeat);
  }

  private repeat() {
    const list = [];
    for (const i in RepeatType) {
      if (isNaN(Number(i))) {
        list.push(
          <option key={RepeatType[i]} value={RepeatType[i]}>
            {RepeatType[Number(RepeatType[i])]}
            </option>,
        );
      }
    }
    return list;
  }

  render() {
    const list = [];
    for (const i in this.props.value.shucan) {
      list.push(
        <li key={i}>
          {this.props.value.shucan[i].title} : {this.props.value.shucan[i].repeat}
        </li>);
    }

    return(
      <div>
        <h1>Welcome to ShuCan</h1>
        <label>
          Title:
          {this.state.title}
          <input
            name="title"
            type="text"
            value={this.state.title}
            onChange={this.handleChange}
            />
          <select name="repeat" value={this.state.repeat} onChange={this.handleChange}>
            {this.repeat()}
          </select>
        </label>
        <button onClick={this.save}/>
        {list}
      </div>
    );
  }
}

class ActionDispatcher {
  constructor(private dispatch: (action: ReduxAction) => void) {}

  public addShucan(title: string, repeat: RepeatType) {
    this.dispatch(addShucan(title, repeat));
  }
}

export default connect(
  (state: ReduxState) => ({ value: state.Shucan }),
  (dispatch: Dispatch<ReduxAction>) => ({ actions: new ActionDispatcher(dispatch) }),
)(Hello);
