import React from 'react';

const Review = ({ review }) => {
    const {user_name, user_photo, review_text} = review;
    return (
        <div className="single-review mb-8">
            <div className='flex'>
                <div className="avatar">
                    <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src={user_photo} alt="" />
                    </div>
                </div>
                <div className='ml-6'>
                    <h3 className='text-xl font-semibold text-gray-500'>{user_name}</h3>
                    <div className="rating my-2">
                        <input type="radio" name="rating-4" className="mask mask-star-2 bg-primary" />
                        <input type="radio" name="rating-4" className="mask mask-star-2 bg-primary" />
                        <input type="radio" name="rating-4" className="mask mask-star-2 bg-primary" />
                        <input type="radio" name="rating-4" className="mask mask-star-2 bg-primary" />
                        <input type="radio" name="rating-4" className="mask mask-star-2 bg-primary" />
                    </div>
                    <p>1 week ago</p>
                </div>
            </div>
            <div className='mt-3'>
                <p>{review_text}</p>
            </div>
        </div>
    );
};

export default Review;