import React from 'react';
import { Route } from 'react-router';
import App from './containers/app';

const routes = () => {
  return (
	<Route path='/' component={ App }>
	</Route>
  );
};

export default routes;