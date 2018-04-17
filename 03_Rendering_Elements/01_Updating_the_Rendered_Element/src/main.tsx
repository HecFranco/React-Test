import * as React from 'react';
import * as ReactDOM from 'react-dom';

const element = <h1>Hello, world</h1>;
ReactDOM.render(element, document.getElementById('hello'));

function tick() {
  const element = (
    <div>
      <h1>Hello, clock!</h1>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
  );
  ReactDOM.render(element, document.getElementById('clock'));
}

setInterval(tick, 1000);