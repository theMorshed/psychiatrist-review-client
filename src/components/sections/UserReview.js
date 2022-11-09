import React from 'react';

const UserReview = ({ review }) => {
    const { service_name, review_text } = review;
    return (
        <tr>
            <td>{service_name}</td>
            <td>{review_text}</td>
            <td><button className='btn btn-primary'>Edit</button></td>
            <td><button className='btn btn-warning'>Delete</button></td>
        </tr>
    );
};

export default UserReview;