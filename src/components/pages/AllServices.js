import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Service from '../sections/Service';

const AllServices = () => {
    const services = useLoaderData();
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-16'>
            {
                services.map(service => <Service key={service._id} service={service}></Service>)
            }
        </div>
    );
};

export default AllServices;