import React from 'react';

const About = () => {
    return (
        <div className="hero bg-base-200 py-8">
            <div className="hero-content flex-col lg:flex-row-reverse justify-between">
                <div>
                    <img className='rounded-xl' src="https://lifespringcdn.s3.amazonaws.com/wp-content/uploads/2021/09/yahia-amin.jpg" alt='author' />
                </div>
                <div className='w-1/2'>
                    <h1 className="text-5xl font-bold">Box Office News!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default About;