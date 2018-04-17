import * as React from 'react';
import * as ReactDOM from 'react-dom';

/*
const element = (
  <h1 className="greeting">
    Hello, world!
  </h1>
);
*/
const element = React.createElement(
  'h1',
  {className: 'greeting'},
  'Hello, world!'
);

ReactDOM.render(
  element,
  document.getElementById('root')
);

