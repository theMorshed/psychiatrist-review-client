import React from 'react';
import { Helmet } from 'react-helmet';
import Banner from '../sections/Banner';

const Blog = () => {
    return (
        <div className='w-full py-10'>
            <Helmet>
                <title>Blog</title>
            </Helmet>
            <Banner></Banner>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10'>
                <div className="card w-full bg-base-100 shadow-xl">
                    <div className="card-body px-5">
                        <h2 className="card-title">Difference Between SQL and NOSQL</h2>
                        <p>SQL is the programming language used to interface with relational databases. (Relational databases model data as records in rows and tables with logical links between them). NoSQL is a class of DBMs that are non-relational and generally do not use SQL.There are five practical differences between SQL and NoSQL: 1. Language, 2. Scalability, 3.Structure, 4. Properties,5. Support and communities</p>
                    </div>
                </div>
                <div className="card w-full bg-base-100 shadow-xl">
                    <div className="card-body px-5">
                        <h2 className="card-title">What is JWT and how does it works?</h2>
                        <p>JSON Web Token (JWT) is an open standard (RFC 7519) for securely transmitting information between parties as JSON object. It is compact, readable and digitally signed using a private key/ or a public key pair by the Identity Provider(IdP). So the integrity and authenticity of the token can be verified by other parties involved. The purpose of using JWT is not to hide data but to ensure the authenticity of the data. JWT is signed and encoded, not encrypted. JWT is a token based stateless authentication mechanism. Since it is a client-side based stateless session, server doesn't have to completely rely on a datastore(database) to save session information.</p>
                    </div>
                </div>
                <div className="card w-full bg-base-100 shadow-xl">
                    <div className="card-body px-5">
                        <h2 className="card-title">Difference between NodeJS and Javascript</h2>
                        <p>1. NodeJS : NodeJS is a cross-platform and opensource Javascript runtime environment that allows the javascript to be run on the server-side. Nodejs allows Javascript code to run outside the browser. Nodejs comes with a lot of modules and mostly used in web development. 2. JavaScript : Javascript is a Scripting language. It is mostly abbreviated as JS. It can be said that Javascript is the updated version of the ECMA script. Javascript is a high-level programming language that uses the concept of Oops but it is based on prototype inheritance. </p>
                    </div>
                </div>
                <div className="card w-full bg-base-100 shadow-xl">
                    <div className="card-body px-5">
                        <h2 className="card-title">How does nodejs handle multiple requests at the same time?</h2>
                        <p>NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them. EventLoop is the listener for the EventQueue. </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;