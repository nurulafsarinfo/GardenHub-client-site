import React, { use } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../../Provider/AuthContext';
import { toast } from 'react-toastify';

const Login = () => {
    const {loginUser} = use(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const handleLogInUser = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        loginUser(email, password)
        .then(result => {
            const user = result.user;
            console.log("after login ", user);
            navigate(`${location.state ? location.state : '/'}`)
        })
        .catch(error => {
            console.log('login error- ', error.message);
            toast.error(error.message);
        })
        
    }

    return (
        <div>
            <div>
                <form onSubmit={handleLogInUser} className='border border-amber-900 rounded-2xl md:w-[500px] w-[400px] mx-auto my-10  p-10 bg-green-100'>
                    <p className='md:text-4xl text-2xl text-center text-amber-900 font-semibold my-5 '>LogIn</p>

                    <label className='label md:text-2xl text-xl text-amber-900'>Email</label>
                    <br />
                    <input type="email" name="email" placeholder='Enter your email' className='border-2 bg-slate-100 text-amber-900 md:text-lg text-sm p-2 rounded-2xl my-2 w-full' required />
                    <br />
                    <label className='label md:text-2xl text-xl text-amber-900'>Password</label>
                    <br />
                    <input type="password" name="password" placeholder='Enter password' className='border-2 bg-slate-100 text-amber-900 md:text-lg text-sm p-2 rounded-2xl my-2 w-full' required />
                    <br />

                    <a className='text-amber-900 underline md:text-lg text-sm'>forgot password?</a>
                    <br />

                    <button className='w-full md:text-2xl bg-green-500 py-2 rounded-2xl my-10 text-amber-900 font-bold'>LogIn Now</button>

                    <p className='text-amber-900 md:text-lg text-sm'>Don't have an account? <Link to='/signup' className='underline text-green-600'>Register</Link></p>
                </form>
            </div>
        </div>
    );
};

export default Login;