import { createMuiTheme } from '@material-ui/core';
import { mainColor, secondaryColor } from '../constants/colors';

export const theme = createMuiTheme({
	palette: {
		primary: { main: mainColor },
		secondary: { main: secondaryColor }
	}
});
