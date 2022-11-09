import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import UserReview from '../sections/UserReview';

const Reviews = () => {
    const reviews = useLoaderData();
    const [updateReviews, setUpdateReviews] = useState(reviews);

    const handleDelete = id => {
        const confirm = window.confirm('Are you sure to delete this item?');
        if (confirm) {
            fetch(`https://psychologist-server.vercel.app/reviews/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('deleted successfully');
                        const remainingReviews = updateReviews.filter(review => review._id !== id);
                        setUpdateReviews(remainingReviews);
                    }
                })
        }
    }

    return (
        <div className="reviews my-10">
            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 py-12'>
                {
                    updateReviews.map(review => <UserReview
                        key={review._id}
                        review={review}
                        handleDelete={handleDelete}
                    ></UserReview>)
                }
            </div>
        </div>
    );
};

export default Reviews;