import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import UserReview from '../sections/UserReview';

const Reviews = () => {
    const { user } = useContext(AuthContext);
    const reviews = useLoaderData();
    
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
                            reviews.map(review => <UserReview
                                key={review._id}
                                review={review}
                            ></UserReview>)
                        }                        
                    </tbody>
                </table>
            </div>            
        </div>
    );
};

export default Reviews;