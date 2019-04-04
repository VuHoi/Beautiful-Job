import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import IntroducePage from '../../pages/Introduce';
import { HomePage } from '../../pages/Home';
import { withCookies } from 'react-cookie';
import { ProtectedRoute } from './ProtectedRoute';
import { BlankRoute } from './BlankRoute';
import { LoginPage } from '../../pages/Login';
const Routes = () => (
	<BrowserRouter>
		<Switch>
			<BlankRoute  />
			<Route exact path='/login' component={LoginPage}   />
			<ProtectedRoute  path='/home' Comp={HomePage} />
		</Switch>
	</BrowserRouter>
);

export default withCookies(Routes);
