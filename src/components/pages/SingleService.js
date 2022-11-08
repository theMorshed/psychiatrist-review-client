import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const SingleService = () => {
    const { user } = useContext(AuthContext);
    return (
        <div>
            <div className="hero min-h-[600px]" style={{ backgroundImage: `url("https://placeimg.com/1000/800/arch")` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                        <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
            <div className="add-review mt-10">
            {
                user ?
                        <>
                            <h2 className='text-3xl font-semibold'>Please add a review.</h2>
                            <div className="form-control w-1/2">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" name="email" placeholder="email" className="input input-bordered input-primary" />
                            </div>
                            <div className="form-control w-1/2">
                                <label className="label">
                                    <span className="label-text">Review</span>
                                </label>
                                <textarea className="textarea textarea-primary" placeholder="Add Review here"></textarea>
                            </div>
                            <input className='btn btn-primary mt-4' type="button" value="Add Review" />
                        </>
                    :
                        <Link className='text-3xl font-semibold underline underline-offset-4' to='/login'>Please login to add a review.</Link>
            }
            </div>
            <div className="reviews my-10">
                <div className="single-review mb-8">
                    <div className='flex'>
                        <div className="avatar">
                            <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                <img src="https://placeimg.com/192/192/people" />
                            </div>
                        </div>
                        <div className='ml-6'>
                            <h3 className='text-xl font-semibold text-gray-500'>Manjur Morshed</h3>
                            <div className="rating my-2">
                                <input type="radio" name="rating-4" className="mask mask-star-2 bg-primary" />
                                <input type="radio" name="rating-4" className="mask mask-star-2 bg-primary" checked />
                                <input type="radio" name="rating-4" className="mask mask-star-2 bg-primary" />
                                <input type="radio" name="rating-4" className="mask mask-star-2 bg-primary" />
                                <input type="radio" name="rating-4" className="mask mask-star-2 bg-primary" />
                            </div>
                            <p>1 week ago</p>
                        </div>
                    </div>
                    <div className='mt-3'>
                        <p>The course is good no doubt, the pace is fabulous as well. However it'll be nice if the content is updated as per the recent changes especially with regards to the the lectures..The course is good no doubt, the pace is fabulous as well. However it'll be nice if the content is updated as per the recent changes especially with regards to the the lectures..The course is good no doubt, the pace is fabulous as well. However it'll be nice if the content is updated as per the recent changes especially with regards to the the lectures..</p>
                    </div>
                </div>
                <div className="single-review mb-8">
                    <div className='flex'>
                        <div className="avatar">
                            <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                <img src="https://placeimg.com/192/192/people" />
                            </div>
                        </div>
                        <div className='ml-6'>
                            <h3 className='text-xl font-semibold text-gray-500'>Manjur Morshed</h3>
                            <div className="rating my-2">
                                <input type="radio" name="rating-4" className="mask mask-star-2 bg-primary" />
                                <input type="radio" name="rating-4" className="mask mask-star-2 bg-primary" checked />
                                <input type="radio" name="rating-4" className="mask mask-star-2 bg-primary" />
                                <input type="radio" name="rating-4" className="mask mask-star-2 bg-primary" />
                                <input type="radio" name="rating-4" className="mask mask-star-2 bg-primary" />
                            </div>
                            <p>1 week ago</p>
                        </div>
                    </div>
                    <div className='mt-3'>
                        <p>The course is good no doubt, the pace is fabulous as well. However it'll be nice if the content is updated as per the recent changes especially with regards to the the lectures..The course is good no doubt, the pace is fabulous as well. However it'll be nice if the content is updated as per the recent changes especially with regards to the the lectures..The course is good no doubt, the pace is fabulous as well. However it'll be nice if the content is updated as per the recent changes especially with regards to the the lectures..</p>
                    </div>
                </div>
                <div className="single-review mb-8">
                    <div className='flex'>
                        <div className="avatar">
                            <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                <img src="https://placeimg.com/192/192/people" />
                            </div>
                        </div>
                        <div className='ml-6'>
                            <h3 className='text-xl font-semibold text-gray-500'>Manjur Morshed</h3>
                            <div className="rating my-2">
                                <input type="radio" name="rating-4" className="mask mask-star-2 bg-primary" />
                                <input type="radio" name="rating-4" className="mask mask-star-2 bg-primary" checked />
                                <input type="radio" name="rating-4" className="mask mask-star-2 bg-primary" />
                                <input type="radio" name="rating-4" className="mask mask-star-2 bg-primary" />
                                <input type="radio" name="rating-4" className="mask mask-star-2 bg-primary" />
                            </div>
                            <p>1 week ago</p>
                        </div>
                    </div>
                    <div className='mt-3'>
                        <p>The course is good no doubt, the pace is fabulous as well. However it'll be nice if the content is updated as per the recent changes especially with regards to the the lectures..The course is good no doubt, the pace is fabulous as well. However it'll be nice if the content is updated as per the recent changes especially with regards to the the lectures..The course is good no doubt, the pace is fabulous as well. However it'll be nice if the content is updated as per the recent changes especially with regards to the the lectures..</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleService;