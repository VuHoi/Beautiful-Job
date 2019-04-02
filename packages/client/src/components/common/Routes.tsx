import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import IntroducePage from '../../pages/Introduce';
import { HomePage } from '../../pages/Home';

const Routes = () => (
	<BrowserRouter>
		<Switch>
			<Route exact path='/' component={IntroducePage}/>
			<Route exact path='/home' component={HomePage} />
		</Switch>
	</BrowserRouter>
);

export default Routes;
