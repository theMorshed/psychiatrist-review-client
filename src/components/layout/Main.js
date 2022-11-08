import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../sections/Header';
import Footer from '../sections/Footer';

const Main = () => {
    return (
        <div className='w-9/12 mx-auto'>
            <Header></Header>                                             
            <Outlet></Outlet> 
            <Footer></Footer>           
        </div>
    );
};

export default Main;