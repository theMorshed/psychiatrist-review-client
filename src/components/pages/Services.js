import React from 'react';

const Services = () => {
    return (
        <div className='py-16'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                <div className="card w-full bg-base-100 shadow-sm py-8">
                    <figure><img className='rounded rounded-tr-xl rounded-bl-xl' src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            Mental Health Therapy
                        </h2>
                        <p className='py-3'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime nostrum commodi error delectus? Quibusdam voluptas quis provident voluptate, inventore ad.</p>
                        <p className='mb-2 font-semibold text-xl'>Price: $200</p>
                        <div className="rating">
                            <input type="radio" name="rating-4" className="mask mask-star-2 bg-primary" />
                            <input type="radio" name="rating-4" className="mask mask-star-2 bg-primary" checked />
                            <input type="radio" name="rating-4" className="mask mask-star-2 bg-primary" />
                            <input type="radio" name="rating-4" className="mask mask-star-2 bg-primary" />
                            <input type="radio" name="rating-4" className="mask mask-star-2 bg-primary" />
                        </div>
                        <div className="card-actions justify-end">
                            <div className="badge badge-outline cursor-pointer mt-4 px-8 font-bold py-3">Details</div>
                        </div>
                    </div>
                </div>   
                <div className="card w-full bg-base-100 shadow-sm py-8">
                    <figure><img className='rounded rounded-tr-xl rounded-bl-xl' src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            Mental Health Therapy
                        </h2>
                        <p className='py-3'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime nostrum commodi error delectus? Quibusdam voluptas quis provident voluptate, inventore ad.</p>
                        <p className='mb-2 font-semibold text-xl'>Price: $200</p>
                        <div className="rating">
                            <input type="radio" name="rating-4" className="mask mask-star-2 bg-primary" />
                            <input type="radio" name="rating-4" className="mask mask-star-2 bg-primary" checked />
                            <input type="radio" name="rating-4" className="mask mask-star-2 bg-primary" />
                            <input type="radio" name="rating-4" className="mask mask-star-2 bg-primary" />
                            <input type="radio" name="rating-4" className="mask mask-star-2 bg-primary" />
                        </div>
                        <div className="card-actions justify-end">
                            <div className="badge badge-outline cursor-pointer mt-4 px-8 font-bold py-3">Details</div>
                        </div>
                    </div>
                </div>  
                <div className="card w-full bg-base-100 shadow-sm py-8">
                    <figure><img className='rounded rounded-tr-xl rounded-bl-xl' src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            Mental Health Therapy
                        </h2>
                        <p className='py-3'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime nostrum commodi error delectus? Quibusdam voluptas quis provident voluptate, inventore ad.</p>
                        <p className='mb-2 font-semibold text-xl'>Price: $200</p>
                        <div className="rating">
                            <input type="radio" name="rating-4" className="mask mask-star-2 bg-primary" />
                            <input type="radio" name="rating-4" className="mask mask-star-2 bg-primary" checked />
                            <input type="radio" name="rating-4" className="mask mask-star-2 bg-primary" />
                            <input type="radio" name="rating-4" className="mask mask-star-2 bg-primary" />
                            <input type="radio" name="rating-4" className="mask mask-star-2 bg-primary" />
                        </div>
                        <div className="card-actions justify-end">
                            <div className="badge badge-outline cursor-pointer mt-4 px-8 font-bold py-3">Details</div>
                        </div>
                    </div>
                </div>               
            </div>
            <div className='text-center my-6'>
                <input type="button" value="Show All" className='btn btn-primary' />
            </div>
        </div>
    );
};

export default Services;