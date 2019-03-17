import React, { useState } from 'react';
import Navigation from '../components/common/Navigation';
import Footer from '../components/common/Footer';
import Slide from '../components/common/Slide';
import Introduce from '../components/Introduce/Introduce';
import YouCan from '../components/Introduce/YouCan';

const Home = () => {
	const [text] = useState<string | null>('Hello World');
	return (
		<div>
			<Navigation />
			<Slide />
			<Introduce />
			<YouCan />
			<Footer />
		</div>
	);
};
export default Home;
