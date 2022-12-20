import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div>
            <footer className="footer p-10 text-base-content mt-10">
                <div>
                    <h2 className='text-3xl text-gray-500 font-bold'>Yahia Amin</h2>
                    <p>Clinical Psychologist<br />Served since 2017.</p>
                </div>
                <div>
                    <span className="footer-title">Services</span>
                    <Link to='/' className="link link-hover">Psychotherapy</Link>
                    <Link to='/' className="link link-hover">Councelling</Link>
                    <Link to='/' className="link link-hover">Coaching</Link>
                    <Link to='/' className="link link-hover">Speaking</Link>
                </div>
                <div>
                    <span className="footer-title">Catch Me</span>
                    <Link to='/' className="link link-hover">About Me</Link>
                    <Link to='/' className="link link-hover">Contact</Link>
                    <Link to='/' className="link link-hover">Jobs</Link>
                </div>
                <div>
                    <span className="footer-title">Legal</span>
                    <Link to='/' className="link link-hover">Terms of use</Link>
                    <Link to='/' className="link link-hover">Privacy policy</Link>
                    <Link to='/' className="link link-hover">Cookie policy</Link>
                </div>
            </footer>
            <div className='text-lg text-center font-normal pb-4'>
                <p>&copy;Copyright by Yahia amin 2025.</p>
            </div>
        </div>
    );
};

export default Footer;