import React, { useState } from 'react';
import { Typography } from '@material-ui/core';
import Navigation from '../components/Navigation';

const Home = () => {
	const [text] = useState<string | null>('Hello World');
	return (
		<div>
			<Typography color='primary'>
				<Navigation/>
			</Typography>
		</div>
	);
};
export default Home;
