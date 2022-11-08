import React from 'react';
import About from '../sections/About';
import Services from './Services';
import Banner from '../sections/Banner';
import Process from '../sections/Process';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <About></About>
            <Process></Process>
        </div>
    );
};

export default Home;