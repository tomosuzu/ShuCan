import * as React from 'react';

export interface HelloProps { compiler: string; framework: string; }

export class Hello extends React.Component<HelloProps, {}> {
  render() {
    return(
      <div>
        <h1>Welcome to ShuCan</h1>
        <p>Hello from {this.props.compiler} and {this.props.framework}!</p>
        <input type="text"/>
      </div>
    );
  }
}
