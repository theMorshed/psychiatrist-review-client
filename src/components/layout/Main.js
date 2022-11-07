import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../sections/Header';
import Footer from '../sections/Footer';
import Banner from '../sections/Banner';

const Main = () => {
    return (
        <div className='w-9/12 mx-auto'>
            <Header></Header> 
            <Banner></Banner>                                               
            <Outlet></Outlet> 
            <Footer></Footer>           
        </div>
    );
};

export default Main;