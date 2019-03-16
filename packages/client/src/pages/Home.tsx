import React, { useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Slide from '../components/Slide';

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
