import React from 'react';
import { Helmet } from 'react-helmet';

const ErrorPage = () => {
    return (
        <div>
            <Helmet>
                <title>Error Page</title>
            </Helmet>
            This is an error page.
        </div>
    );
};

export default ErrorPage;