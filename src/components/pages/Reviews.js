import React, { useContext, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import toast, { Toaster } from 'react-hot-toast';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import UserReview from '../sections/UserReview';

const Reviews = () => {
    const { user } = useContext(AuthContext);
    const [reviews, setReviews] = useState(null);
    const [updateReviews, setUpdateReviews] = useState(reviews);
    const [empty, setEmpty] = useState(false);

    useEffect(() => {
        fetch(`https://psychologist-server.vercel.app/reviews/${user.email}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('psychologist-token')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                setReviews(data);
                if(data.length === 0) {
                    setEmpty(true);
                }
            })
    }, [updateReviews, user.email]);

    console.log(empty);

    const handleDelete = id => {
        const confirm = window.confirm('Are you sure to delete this item?');
        if (confirm) {
            fetch(`https://psychologist-server.vercel.app/reviews/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        toast.success('Review deleted successfully');
                        const remainingReviews = updateReviews?.filter(review => review._id !== id);
                        setUpdateReviews(remainingReviews);
                    }
                })
        }
    }


    return (
        <div className="reviews my-10">
            <Helmet>
                <title>Reviews</title>
            </Helmet>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 py-12'>                
                {                    
                    reviews?.map(review => <UserReview
                        key={review._id}
                        review={review}
                        handleDelete={handleDelete}
                    ></UserReview>)                                        
                }
                {
                    empty && 
                        <h3 className='text-center text-red-700 text-2xl font-semibold'>There is no review. Please add a review..</h3>
                }
            </div>
            <Toaster></Toaster>
        </div>
    );
};

export default Reviews;