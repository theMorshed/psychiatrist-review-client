import React, { useContext, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link, useLoaderData, useLocation } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import Review from '../sections/Review';

const SingleService = () => {
    const { user } = useContext(AuthContext);
    const location = useLocation();
    const service = useLoaderData();
    const { _id, name, price, photo, desc } = service;
    const [reviews, setReviews] = useState([]);

    const handleAddReview = (event) => {
        event.preventDefault();
        const form = event.target;
        const review_text = form.review.value;
        const email = user?.email;
        const user_name = user?.displayName;
        const service_name = name;
        const service_id = _id;
        const user_photo = user?.photoURL;
        const review = { user_name, user_photo, email, service_id, service_name, review_text };

        fetch('https://psychologist-server.vercel.app/review/add', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    form.reset();
                    window.location.reload();                    
                }
            })
    }

    useEffect(() => {
        const url = `https://psychologist-server.vercel.app/review/${_id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [_id]);

    return (
        <div>
            <Helmet>
                <title>Single Service</title>
            </Helmet>
            <div className="hero min-h-[600px]" style={{ backgroundImage: `url("${photo}")` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="text-gray-200">
                        <h1 className="mb-5 text-5xl font-bold">{name}</h1>
                        <p className="mb-5 text-xl">{desc}</p>
                        <p className='text-2xl font-normal text-primary'>Price: ${price}</p>
                    </div>
                </div>
            </div>
            {
                !(reviews.length > 0) && <h2 className='text-5xl mt-10 font-semibold text-center'>No reviews were added</h2>
            }
            <div className="add-review mt-10">
                {
                    user ?
                        <>
                            <h2 className='text-3xl font-semibold'>Please add a review.</h2>
                            <form onSubmit={handleAddReview}>
                                <div className="form-control w-10/12 lg:w-1/2">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="text" defaultValue={user?.email} name="email" placeholder="email" className="input input-bordered input-primary" readOnly />
                                </div>
                                <div className="form-control w-10/12 lg:w-1/2">
                                    <label className="label">
                                        <span className="label-text">Review</span>
                                    </label>
                                    <textarea name="review" className="textarea textarea-primary" placeholder="Add Review here"></textarea>
                                </div>
                                <input className='btn btn-primary mt-4' type="submit" value="Add Review" />
                            </form>
                        </>
                        :
                        <Link className='text-3xl font-semibold underline underline-offset-4' to='/login' state={{ from: location }}>Please login to add a review.</Link>
                }
            </div>
            <div className="reviews my-10">               
                {
                    reviews.map(review => <Review
                        key={review._id}
                        review={review}
                    ></Review>)
                }
            </div>
        </div>
    );
};

export default SingleService;