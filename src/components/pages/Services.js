import React from 'react';
import { Link } from 'react-router-dom';
import Service from '../sections/Service';

const Services = ({ services }) => {
    return (
        <div className='py-16'>            
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                {
                    services.map(service => <Service key={service._id} service={service}></Service>)
                }                
            </div>
            <div className='text-center my-6'>
                <Link to='/services'>
                    <input type="button" value="Show All" className='btn btn-primary' />
                </Link>
            </div>
        </div>
    );
};

export default Services;