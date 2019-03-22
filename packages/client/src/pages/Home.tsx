import React, { useState } from 'react';
import Navigation from '../components/common/Navigation';
import Footer from '../components/common/Footer';
import Slide from '../components/common/Slide';
import Introduce from '../components/Introduce/Introduce';
import YouCan from '../components/Introduce/YouCan';
import Index from '../components/Introduce/Index';
import About from '../components/Introduce/About';
import Contact from '../components/Introduce/Contact';
import { useStore } from 'easy-peasy';
import Login from '../components/common/Login';


const Home = () => {
	const IsOpen:number = useStore((state:any) => state.homeStore.IsOpenLogin)
	console.log(IsOpen);
	
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
		</div>
	);
};
export default Home;
