import React from 'react';
import { Route, Redirect } from 'react-router';
import App from './containers/app';

const routes = () => {
  return (
	<Route path='/react-kawaii/' component={ App }>
    <Redirect from="/" to="/react-kawaii/" />
	</Route>
  );
};

export default routes;
