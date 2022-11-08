import React from 'react';
import About from '../sections/About';
import Services from './Services';
import Banner from '../sections/Banner';
import Process from '../sections/Process';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const services = useLoaderData();
    
    return (
        <div>
            <Banner></Banner>
            <Services services={services}></Services>
            <About></About>
            <Process></Process>
        </div>
    );
};

export default Home;