import React from 'react';
import { Helmet } from 'react-helmet';
import { useLoaderData, useNavigate } from 'react-router-dom';

const UpdateReview = () => {
    const review = useLoaderData();
    const {_id, email} = review;
    const navigate = useNavigate();

    const handleUpdate = event => {
        event.preventDefault();
        const form = event.target;
        const review = form.review.value;
        
        fetch(`https://psychologist-server.vercel.app/update/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({review})
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    navigate(`/reviews/${email}`);
                }
            })
    }

    return (
        <form onSubmit={handleUpdate} className='my-10'>
            <Helmet>
                <title>Update</title>
            </Helmet>
            <h2 className='text-3xl font-semibold'>Update Review</h2>
            <div className="form-control w-10/12 lg:w-1/2">
                <label className="label">
                    <span className="label-text">Service Name</span>
                </label>
                <input defaultValue={review.service_name} type="text" name="name" placeholder="Service name" className="input input-bordered input-primary" readOnly />
            </div>
            <div className="form-control w-10/12 lg:w-1/2">
                <label className="label">
                    <span className="label-text">Review</span>
                </label>
                <textarea defaultValue={review.review_text} className="textarea textarea-primary" name="review" placeholder="Service description write here.."></textarea>
            </div>
            <input className='btn btn-primary mt-4' type="submit" value="Update Review" />
        </form>
    );
};

export default UpdateReview;