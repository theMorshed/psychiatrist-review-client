import React from 'react';

const AddService = () => {
    return (
        <div>
            <h2 className='text-3xl font-semibold'>Add a service</h2>
            <div className="form-control w-1/2">
                <label className="label">
                    <span className="label-text">Service Name</span>
                </label>
                <input type="text" name="name" placeholder="Service name" className="input input-bordered input-primary" />
            </div>
            <div className="form-control w-1/2">
                <label className="label">
                    <span className="label-text">Photo</span>
                </label>
                <input type="text" name="photo" placeholder="service photo url" className="input input-bordered input-primary" />
            </div>
            <div className="form-control w-1/2">
                <label className="label">
                    <span className="label-text">Description</span>
                </label>
                <textarea className="textarea textarea-primary" placeholder="Service description write here.."></textarea>
            </div>
            <input className='btn btn-primary mt-4' type="button" value="Add New Service" />
        </div>
    );
};

export default AddService;