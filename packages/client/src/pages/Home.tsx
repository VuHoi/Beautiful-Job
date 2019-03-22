import React, { useState } from 'react';
import Navigation from '../components/common/Navigation';
import Footer from '../components/common/Footer';
import Slide from '../components/common/Slide';
import Introduce from '../components/Introduce/Introduce';
import YouCan from '../components/Introduce/YouCan';
import Index from '../components/Introduce/Index';
import About from '../components/Introduce/About';
import Contact from '../components/Introduce/Contact';
import Login from '../components/common/Login';
import Register from '../components/common/Register';


const Home = () => {

	
	return (
		<div>
			<Navigation />
			<Slide />
			<Introduce />
			<YouCan />
			<Index/>
			<About/>
			<Contact/>
			<Footer />
			<Login/>
			<Register/>
		</div>
	);
};
export default Home;
