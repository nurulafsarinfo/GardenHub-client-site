import React, { use, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../../Provider/AuthContext';
import { toast } from 'react-toastify';
import Swal from 'sweetalert2';

const Signup = () => {
    const { createUser } = use(AuthContext);
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const location = useLocation();

    const handleSignup = (e) => {
        e.preventDefault();

        const form = e.target;
        const formData = new FormData(form);
        const inputDatas = Object.fromEntries(formData.entries());
        // console.log('input datas is ',inputDatas.email)
        const email = inputDatas.email;
        const password = inputDatas.password;

        // password validation
        setError('');
        if(!/(?=.*[a-z])/.test(password)){
            setError('* Add at least one small letter to your password!');
            return;
        }else if(!/(?=.*[A-Z])/.test(password)){
            setError('* Add at least one capital letter to your password!');
            return;
        }else if(!/(?=.*[@$%&*!?])/.test(password)){
            setError('* Please add at least one special symbol to your password.');
            return;
        }else if(password.length < 8){
            setError('* Password must be at least 8 character long.')
        }else{
            setError('');
        }

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log('user is ', user);
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Registration has been Success!",
                    showConfirmButton: false,
                    timer: 1500
                });
                navigate(`${location.state ? location.state : '/'}`)
            })
            .catch((error) => {
                console.log(error.message);
                toast.error(error.message)
            })


    }
    return (
        <div>
            <div>
                <form onSubmit={handleSignup} className='border border-amber-900 rounded-2xl md:w-[500px] w-[400px] mx-auto my-10  p-10 bg-green-100'>
                    <p className='md:text-4xl text-2xl text-center text-amber-900 font-semibold my-5 '>SignUp</p>

                    <label className='label md:text-2xl text-xl text-amber-900'>Name</label>
                    <br />
                    <input type="text" name="name" placeholder='Enter your name' className='border-2 bg-slate-100 text-amber-900 md:text-lg text-sm p-2 rounded-2xl my-2 w-full ' required />
                    <br />
                    <label className='label md:text-2xl text-xl text-amber-900'>Photo URL</label>
                    <br />
                    <input type="text" name="photo" placeholder='Enter your photo url' className='border-2 bg-slate-100 text-amber-900 md:text-lg text-sm p-2 rounded-2xl my-2 w-full' required />
                    <br />
                    <label className='label md:text-2xl text-xl text-amber-900'>Email</label>
                    <br />
                    <input type="email" name="email" placeholder='Enter your email' className='border-2 bg-slate-100 text-amber-900 md:text-lg text-sm p-2 rounded-2xl my-2 w-full' required />
                    <br />
                    <label className='label md:text-2xl text-xl text-amber-900'>Password</label>
                    <br />
                    <input type="password" name="password" placeholder='Enter password' className='border-2 bg-slate-100 text-amber-900 md:text-lg text-sm p-2 rounded-2xl my-2 w-full' required />
                    {
                        error ? <p className='text-red-500'>{error}</p> : ''
                    }
                    <br />

                    <p className='text-amber-900 underline md:text-lg text-sm'>Already have an account? <Link className='text-green-700' to='/login'>Login</Link></p>
                    <br />

                    <button className='w-full md:text-2xl bg-green-500 py-2 rounded-2xl my-10 text-amber-900 font-bold hover:bg-green-600 hover:text-amber-800 transition duration-300'>Register Now</button>
                </form>
            </div>
        </div>
    );
};

export default Signup;