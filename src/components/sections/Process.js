import React from 'react';
import { FaBuromobelexperte, FaConfluence, FaConnectdevelop, FaCottonBureau } from 'react-icons/fa';

const Process = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 py-12'>
            <div className="card items-center">
                <figure className="border border-gray-500 w-32 h-32 rounded-full">
                    <FaConfluence className='text-4xl'></FaConfluence>
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">Primary Steps</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
            </div>
            <div className="card items-center">
                <figure className="border border-gray-500 w-32 h-32 rounded-full">
                    <FaConnectdevelop className='text-4xl'></FaConnectdevelop>
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">Primary Steps</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium </p>
                </div>
            </div>
            <div className="card items-center">
                <figure className="border border-gray-500 w-32 h-32 rounded-full">
                    <FaCottonBureau className='text-4xl'></FaCottonBureau>
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">Primary Steps</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium quod </p>
                </div>
            </div>
            <div className="card items-center">
                <figure className="border border-gray-500 w-32 h-32 rounded-full">
                    <FaBuromobelexperte className='text-4xl'></FaBuromobelexperte>
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">Primary Steps</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium quod corpo.</p>
                </div>
            </div>
        </div>
    );
};

export default Process;