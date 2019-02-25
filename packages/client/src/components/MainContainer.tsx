import React from 'react';
import Routes from './Routes';
import { CssBaseline, MuiThemeProvider } from '@material-ui/core';
import { theme } from '../styles/theme';

const MainContainer = () => (
	<MuiThemeProvider theme={theme}>
		<CssBaseline/>
		<Routes/>
	</MuiThemeProvider>
);

export default MainContainer;
