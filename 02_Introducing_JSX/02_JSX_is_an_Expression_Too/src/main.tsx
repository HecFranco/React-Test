import * as React from 'react';
import * as ReactDOM from 'react-dom';

function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

function getGreeting(user) {
  if (user) {
    return <h1>Hello, {formatName(user)}!</h1>;
  }
  return <h1>Hello, Stranger.</h1>;
}

const user = {
  firstName: 'Harper',
  lastName: 'Perez'
};

const element_1 = (
  <h1>
    {getGreeting(user)}
  </h1>
);
const element_2 = (
  <h1>
    {getGreeting(null)}
  </h1>
);

ReactDOM.render(
  element_1,
  document.getElementById('root_1')
);
ReactDOM.render(
  element_2,
  document.getElementById('root_2')
);