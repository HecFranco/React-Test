import * as React from 'react';
import * as ReactDOM from 'react-dom';

function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

const user = {
  firstName: 'Harper',
  lastName: 'Perez',
  avatarUrl: 'https://www.1plusx.com/app/mu-plugins/all-in-one-seo-pack-pro/images/default-user-image.png',
};

const element= (<>
                  <img src={user.avatarUrl}></img>
                  <img src={user.avatarUrl} />
                </>);

ReactDOM.render(
  element,
  document.getElementById('root')
);
