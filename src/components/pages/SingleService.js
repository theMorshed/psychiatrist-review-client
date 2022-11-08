import React, { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const SingleService = () => {
    const { user } = useContext(AuthContext);
    const location = useLocation();

    return (
        <div>
            <div className="hero min-h-[600px]" style={{ backgroundImage: `url("https://images.unsplash.com/photo-1579600161224-cac5a2971069?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80")` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="text-gray-200">
                        <h1 className="mb-5 text-5xl font-bold">Mental Health Therapy</h1>
                        <p className="mb-5 text-xl">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci quibusdam vel veritatis dicta deleniti nulla quos facilis accusantium explicabo, velit ducimus harum modi nostrum expedita a, maxime omnis voluptas iste dolore blanditiis cupiditate. Dolor, quam. Odit sequi quidem placeat cum! Consequuntur nisi eius autem, vel alias pariatur doloremque dignissimos officia nesciunt voluptas earum sequi facilis molestiae? Tenetur odio enim aliquid deleniti. Eveniet sit praesentium, consequuntur id iure animi ullam fugiat sed voluptate sunt ad quis! Modi facere aspernatur magnam porro nobis, voluptas incidunt, odit doloremque ab, sequi doloribus unde? Deleniti recusandae aliquam repudiandae numquam illum iure libero eaque labore! Est?</p>
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
                        <Link className='text-3xl font-semibold underline underline-offset-4' to='/login' state={{ from: location }}>Please login to add a review.</Link>
            }
            </div>
            <div className="reviews my-10">
                <div className="single-review mb-8">
                    <div className='flex'>
                        <div className="avatar">
                            <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                <img src="https://placeimg.com/192/192/people" alt="" />
                            </div>
                        </div>
                        <div className='ml-6'>
                            <h3 className='text-xl font-semibold text-gray-500'>Manjur Morshed</h3>
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
                        <p>The course is good no doubt, the pace is fabulous as well. However it'll be nice if the content is updated as per the recent changes especially with regards to the the lectures..The course is good no doubt, the pace is fabulous as well. However it'll be nice if the content is updated as per the recent changes especially with regards to the the lectures..The course is good no doubt, the pace is fabulous as well. However it'll be nice if the content is updated as per the recent changes especially with regards to the the lectures..</p>
                    </div>
                </div>
                <div className="single-review mb-8">
                    <div className='flex'>
                        <div className="avatar">
                            <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                <img src="https://placeimg.com/192/192/people" alt="" />
                            </div>
                        </div>
                        <div className='ml-6'>
                            <h3 className='text-xl font-semibold text-gray-500'>Manjur Morshed</h3>
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
                        <p>The course is good no doubt, the pace is fabulous as well. However it'll be nice if the content is updated as per the recent changes especially with regards to the the lectures..The course is good no doubt, the pace is fabulous as well. However it'll be nice if the content is updated as per the recent changes especially with regards to the the lectures..The course is good no doubt, the pace is fabulous as well. However it'll be nice if the content is updated as per the recent changes especially with regards to the the lectures..</p>
                    </div>
                </div>
                <div className="single-review mb-8">
                    <div className='flex'>
                        <div className="avatar">
                            <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                <img src="https://placeimg.com/192/192/people" alt="" />
                            </div>
                        </div>
                        <div className='ml-6'>
                            <h3 className='text-xl font-semibold text-gray-500'>Manjur Morshed</h3>
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
                        <p>The course is good no doubt, the pace is fabulous as well. However it'll be nice if the content is updated as per the recent changes especially with regards to the the lectures..The course is good no doubt, the pace is fabulous as well. However it'll be nice if the content is updated as per the recent changes especially with regards to the the lectures..The course is good no doubt, the pace is fabulous as well. However it'll be nice if the content is updated as per the recent changes especially with regards to the the lectures..</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleService;