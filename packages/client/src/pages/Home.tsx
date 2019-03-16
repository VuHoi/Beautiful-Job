import React, { useState } from 'react';
import Navigation from '../components/common/Navigation';
import Footer from '../components/common/Footer';
import Slide from '../components/common/Slide';

const Home = () => {
	const [text] = useState<string | null>('Hello World');
	return (
		<div>
			<Navigation />
			<Slide />
			<Footer />
		</div>
	);
};
export default Home;
