import React from 'react';
import { Link } from 'react-router-dom';

const UserReview = ({ review, handleDelete, handleUpdate }) => {
    const { _id, service_name, review_text } = review;
    return (
        <div className='border p-5 rounded-lg'>
            <h2 className='text-2xl font-semibold'>{service_name}</h2>
            <p className='my-3 text-lg'>{review_text}</p>
            <Link to={`/update/${_id}`} htmlFor="my-modal-4" className='btn btn-primary'>Edit</Link>
            <button onClick={() => handleDelete(`${_id}`)} className='btn btn-warning ml-3'>Delete</button>                                    
        </div>        
    );
};

export default UserReview;