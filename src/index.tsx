import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { Hello } from './components/App';

const appNode = document.createElement('div');

document.body.appendChild(appNode);

ReactDOM.render(<Hello compiler="TypeScript" framework="React" /> , appNode);
