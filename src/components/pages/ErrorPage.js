import React from 'react';
import { Helmet } from 'react-helmet';

const ErrorPage = () => {
    return (
        <div>
            <Helmet>
                <title>Error Page</title>
            </Helmet>
            <h2 className='text-center py-16 text-red-700 font-semibold text-3xl'>You have come to an wrong route,, please select a route from our header..</h2>
        </div>
    );
};

export default ErrorPage;