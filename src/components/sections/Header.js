import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    const menuItem = <>
        <li><Link className={({ isActive }) => isActive ? 'underline underline-offset-4' : undefined} to='/services'>Services</Link></li>
        <li><Link className={({ isActive }) => isActive ? 'underline underline-offset-4' : undefined} to='/login'>Login</Link></li> 
    </>;
    return (
        <div>
            <div className="navbar bg-base-100 py-6">
                <div className="navbar-start">
                    <Link to='/' className="btn btn-ghost normal-case text-xl">
                        <span>Psychologist</span>
                    </Link>
                </div>
                <div className="navbar-end">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {menuItem}
                        </ul>
                    </div>
                    <div className='hidden lg:flex'>
                        <ul className="menu menu-horizontal p-0">
                            {menuItem}                          
                        </ul>
                    </div>                    
                </div>
            </div>
        </div>
    );
};

export default Header;