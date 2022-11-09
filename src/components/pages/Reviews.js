import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import UserReview from '../sections/UserReview';

const Reviews = () => {
    const reviews = useLoaderData();
    const [updateReviews, setUpdateReviews] = useState(reviews);
    const handleDelete = id => {
        const confirm = window.confirm('Are you sure to delete this item?');
        console.log(id, confirm);
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
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Review</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            updateReviews.map(review => <UserReview
                                key={review._id}
                                review={review}
                                handleDelete={handleDelete}
                            ></UserReview>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Reviews;