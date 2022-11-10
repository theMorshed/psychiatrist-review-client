import React from 'react';
import { Helmet } from 'react-helmet';
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import Banner from '../sections/Banner';

const AddService = () => {
    const navigate = useNavigate();

    const handleAddService = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const price = form.price.value;
        const desc = form.description.value;
        const service = { name, photo, price, desc };

        fetch('https://psychologist-server.vercel.app/service/add', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(service)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    form.reset();
                    toast.success('New service added successfully');
                    navigate('/services');
                }
            })
    }

    return (
        <div>
            <Helmet>
                <title>Add Service</title>
            </Helmet>
            <Banner></Banner>
            <form onSubmit={handleAddService} className='my-10'>
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
                        <span className="label-text">Price</span>
                    </label>
                    <input type="number" name="price" placeholder="Service Price" className="input input-bordered input-primary" />
                </div>
                <div className="form-control w-1/2">
                    <label className="label">
                        <span className="label-text">Description</span>
                    </label>
                    <textarea className="textarea textarea-primary" name="description" placeholder="Service description write here.."></textarea>
                </div>
                <input className='btn btn-primary mt-4' type="submit" value="Add New Service" />
            </form>
            <Toaster></Toaster>
        </div>
    );
};

export default AddService;