import React from 'react';
import About from '../sections/About';
import Services from './Services';
import Banner from '../sections/Banner';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <About></About>
        </div>
    );
};

export default Home;