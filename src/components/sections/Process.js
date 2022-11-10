import React from 'react';
import { FaBuromobelexperte, FaConfluence, FaConnectdevelop, FaCottonBureau } from 'react-icons/fa';

const Process = () => {
    return (
        <div>
            <div>
                <h2 className='text-5xl text-center text-gray-700 mt-12 mb-6'>Our Treatment Process</h2>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 py-12'>
                <div className="card items-center">
                    <figure className="border border-gray-500 w-32 h-32 rounded-full">
                        <FaConfluence className='text-4xl'></FaConfluence>
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Psychotherapy</h2>
                        <p>There are over a thousand different named psychotherapies, some being minor variations while others are based on very different conceptions.</p>
                    </div>
                </div>
                <div className="card items-center">
                    <figure className="border border-gray-500 w-32 h-32 rounded-full">
                        <FaConnectdevelop className='text-4xl'></FaConnectdevelop>
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Grief & Loss</h2>
                        <p>Psychologists employ empirical methods to infer causal and correlational relationships between psychosocial variables.</p>
                    </div>
                </div>
                <div className="card items-center">
                    <figure className="border border-gray-500 w-32 h-32 rounded-full">
                        <FaCottonBureau className='text-4xl'></FaCottonBureau>
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Coaching</h2>
                        <p>Psychologists consider the organism the basis of the mind, and therefore a vitally related area of study. Psychiatrists and neuropsychologists are your awesome coach.</p>
                    </div>
                </div>
                <div className="card items-center">
                    <figure className="border border-gray-500 w-32 h-32 rounded-full">
                        <FaBuromobelexperte className='text-4xl'></FaBuromobelexperte>
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Speaking</h2>
                        <p>The majority of psychologists are involved in some kind of therapeutic role, practicing in clinical, counseling, or school settings.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Process;