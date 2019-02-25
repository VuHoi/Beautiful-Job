import React, { useState } from 'react';
import { Typography } from '@material-ui/core';

const Home = () => {
	const [text] = useState<string | null>('Hello World');
	return (
		<div>
			<Typography color='primary'>
				{text}
			</Typography>
		</div>
	);
};
export default Home;
