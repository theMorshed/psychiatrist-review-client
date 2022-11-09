import React from 'react';

const UserReview = ({ review, handleDelete }) => {
    const { _id, service_name, review_text } = review;
    return (
        <tr>
            <td>{service_name}</td>
            <td>{review_text}</td>
            <td><button className='btn btn-primary'>Edit</button></td>
            <td><button onClick={() => handleDelete(`${ _id }`)} className='btn btn-warning'>Delete</button></td>
        </tr>
    );
};

export default UserReview;