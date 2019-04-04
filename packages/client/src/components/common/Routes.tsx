import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { HomePage } from '../../pages/Home';
import { withCookies } from 'react-cookie';
import { ProtectedRoute } from './ProtectedRoute';
import { BlankRoute } from './BlankRoute';
import { LoginPage } from '../../pages/Login';
const Routes = () => (
	<BrowserRouter>
		<Switch>
			<Route exact path='/dangnhap' component={LoginPage} />
			<ProtectedRoute path='/home' Comp={HomePage} />
			<BlankRoute />
		</Switch>
	</BrowserRouter>
);

export default withCookies(Routes);
