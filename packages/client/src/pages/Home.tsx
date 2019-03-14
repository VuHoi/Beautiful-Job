import React, { useState } from 'react';
import Navigation from '../components/Navigation';

const Home = () => {
	const [text] = useState<string | null>('Hello World');
	return (
		<div>
				<Navigation />
		</div>
	);
};
export default Home;
