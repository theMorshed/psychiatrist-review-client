import React, { useContext } from 'react';
import { Helmet } from 'react-helmet';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import Service from '../sections/Service';

const AllServices = () => {
    const services = useLoaderData();
    const { setSpinner } = useContext(AuthContext);
    setSpinner(false);
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-16'>
            <Helmet>
                <title>Services</title>
            </Helmet>
            {
                services.map(service => <Service key={service._id} service={service}></Service>)
            }
        </div>
    );
};

export default AllServices;