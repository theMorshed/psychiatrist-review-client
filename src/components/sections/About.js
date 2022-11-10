import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <div className="hero bg-base-200 py-8">
            <div className="hero-content flex-col lg:flex-row-reverse justify-between">
                <div>
                    <img className='rounded-xl' src="https://lifespringcdn.s3.amazonaws.com/wp-content/uploads/2021/09/yahia-amin.jpg" alt='author' />
                </div>
                <div className='w-10/12 lg:w-1/2'>
                    <h1 className="text-5xl font-bold">Yahia Amin</h1>
                    <p className="py-6">Hello this is Yahia amin, I'm a psychologist of bangladesh. I have finished my honours and masters in Psychology form Dhaka University at 2017. I have served since 2017 and a lot of my patients are really happy for my councillation. Thanks to visit my Website.</p>
                    <Link to='/services'><button className="btn btn-primary">Our Popular Services</button></Link>
                </div>
            </div>
        </div>
    );
};

export default About;