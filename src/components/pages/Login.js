import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import { FaGoogle } from "react-icons/fa";
import { Helmet } from 'react-helmet';

const Login = () => {
    const { logIn, setUser, googleLogin, setError } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    const [spinner, setSpinner] = useState(false);

    const handleLogin = (event) => {
        setSpinner(true);
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        logIn(email, password)
            .then(result => {
                const user = result.user;

                const currentUser = {
                    email: user.email
                }

                // get jwt token
                fetch('https://psychologist-server.vercel.app/jwt', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(currentUser)
                })
                    .then(res => res.json())
                    .then(data => {  
                        console.log(data);                                              
                        localStorage.setItem('psychologist-token', data.token);
                        setUser(user);
                        form.reset();
                        setSpinner(false);
                        navigate(from, { replace: true });
                    });                
            })
            .catch(err => {
                setError(err.message);
                setSpinner(false);
            });
    }

    const handleGoogleLogin = () => {
        setSpinner(true);
        googleLogin()
            .then(result => {
                const user = result.user;

                const currentUser = {
                    email: user.email
                }

                // get jwt token
                fetch('https://psychologist-server.vercel.app/jwt', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(currentUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        localStorage.setItem('psychologist-token', data.token);
                        setUser(user);
                        setSpinner(false);
                        navigate(from, { replace: true });
                    });                 
            })
            .catch(err => {
                setError(err.message);
                setSpinner(false);
            });
    }


    return (
        <div className="hero py-16">
            <Helmet>
                <title>Login</title>
            </Helmet>
            {
                spinner &&
                <div id="progress-bar" className="spinner flex justify-center z-10">
                    <div role="status">
                        <svg aria-hidden="true"
                            className="mr-2 w-20 h-20 text-gray-200 animate-spin dark:text-gray-600 fill-blue-700"
                            viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                                fill="currentColor"></path>
                            <path
                                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                                fill="currentFill"></path>
                        </svg>
                        <span className="sr-only">Loading...</span>
                    </div>
                </div>
            }
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left ml-10">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <p className="py-6">Welcome to our review services. If you have an account then login from here and watch people's attractive review.</p>
                </div>
                <div className="card flex-shrink-0 w-full max-w-lg shadow-2xl bg-base-100 py-8">
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="/" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                            <Link className="label-text-alt link link-hover ml-1" to='/register'>Don't have an account? Please register here.</Link>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>
                    <div className='ml-8'>
                        <button onClick={handleGoogleLogin} className="btn btn-xs btn-primary btn-outline"><FaGoogle className="mr-2"></FaGoogle>Login with Google</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;