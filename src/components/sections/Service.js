import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { Link } from 'react-router-dom';

const Service = ({ service }) => {
    const { _id, name, photo, desc, price } = service;
    return (
        <PhotoProvider>
            <div className="card w-full bg-base-100 shadow-sm">
                <figure>
                    <PhotoView src={photo}>
                        <img className='rounded rounded-tr-xl rounded-bl-xl' src={photo} alt="Shoes" />
                    </PhotoView>
                </figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {name}
                    </h2>
                    <p className='py-3'>
                        {
                            desc.length > 50 ? desc.slice(0, 50) : desc
                        }
                    </p>
                    <p className='mb-2 font-semibold text-xl'>Price: ${price}</p>
                    <div className="rating">
                        <input type="radio" name="rating-4" className="mask mask-star-2 bg-primary" />
                        <input type="radio" name="rating-4" className="mask mask-star-2 bg-primary" />
                        <input type="radio" name="rating-4" className="mask mask-star-2 bg-primary" />
                        <input type="radio" name="rating-4" className="mask mask-star-2 bg-primary" />
                        <input type="radio" name="rating-4" className="mask mask-star-2 bg-primary" />
                    </div>
                    <div className="card-actions justify-end">
                        <Link to={`/service/${_id}`}>
                            <div className="badge badge-outline cursor-pointer mt-4 px-8 font-bold py-3">Details</div>
                        </Link>
                    </div>
                </div>
            </div>
        </PhotoProvider>
    );
};

export default Service;