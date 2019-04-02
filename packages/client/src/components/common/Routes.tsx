import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import IntroducePage from '../../pages/Introduce';
import { HomePage } from '../../pages/Home';
import { withCookies } from 'react-cookie';
import { ProtectedRoute } from './ProtectedRoute';
const Routes = () => (
	<BrowserRouter>
		<Switch>
			<Route exact path='/' component={IntroducePage}   />
			<ProtectedRoute  path='/home' Comp={HomePage} />
		</Switch>
	</BrowserRouter>
);

export default withCookies(Routes);
