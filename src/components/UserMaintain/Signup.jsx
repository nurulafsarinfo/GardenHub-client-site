import React, { use, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../../Provider/AuthContext';
import { toast } from 'react-toastify';
import Swal from 'sweetalert2';

const Signup = () => {
    const { createUser, googleLogin, updateUserProfile, setUser } = use(AuthContext);
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const location = useLocation();

    const handleSignup = (e) => {
        e.preventDefault();

        const form = e.target;
        const formData = new FormData(form);
        const inputDatas = Object.fromEntries(formData.entries());
        const email = inputDatas.email;
        const password = inputDatas.password;
        const name = inputDatas.name;
        const photo = inputDatas.photo;

        console.log("datatataata", name, email, photo);
        console.log("datatataata", name, email, photo);
       
       
        // password validation
        setError('');
        if (!/(?=.*[a-z])/.test(password)) {
            setError('* Add at least one small letter to your password!');
            return;
        } else if (!/(?=.*[A-Z])/.test(password)) {
            setError('* Add at least one capital letter to your password!');
            return;
        } else if (!/(?=.*[@$%&*!?])/.test(password)) {
            setError('* Please add at least one special symbol to your password.');
            return;
        } else if (password.length < 8) {
            setError('* Password must be at least 8 character long.')
        } else {
            setError('');
        }

        // user sign un with emil, pass method 
        createUser(email, password)
            .then(result => {
                const user = result.user;

            updateUserProfile({ displayName: name, photoURL: photo})
            .then(() => {
                setUser({...user, displayName: name, photoURL: photo});
            })
            .catch(error => {
                toast.error("User could't updated.",error.message);
            })

                form.reset();
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
                toast.error(error.message);
            })

            // update user profile 


    }

    const handleGoogleSignin = () => {

        // user sign up method with Google
        googleLogin()
            .then(result => {
                const user = result.user;

                if (!user) {
                    toast.error('LogIn Failed. No user return from Google')
                    return;
                }

                setUser(user);
                console.log('google user', user.email, user.displayName);
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "You have Successfully SignUp with Google.",
                    showConfirmButton: false,
                    timer: 2000
                });
                navigate(location.state?.from?.pathname || '/')
            })
            .catch(error => {
                console.log(error.message);
                toast.error(error.message);
            })
    }






    return (
        <div>
            <div className='border border-amber-900 rounded-2xl md:w-[500px] w-[400px] mx-auto my-10  p-10 bg-green-100'>
                <form onSubmit={handleSignup} >
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

                    <p className='text-amber-900 underline md:text-lg text-xs'>Already have an account? <Link className='text-green-700' to='/login'>Login</Link></p>
                    <br />

                    <button className='w-full md:text-2xl bg-green-500 py-2 rounded-2xl my-10 text-amber-900 font-bold hover:bg-green-600 hover:text-amber-800 transition duration-300'>Register Now</button>
                </form>

                <div className='flex justify-around text-gray-400 mb-5'>
                    <p>----------------</p><span>Or</span> <p>----------------</p>
                </div>

                <button onClick={handleGoogleSignin} className="btn bg-white text-black border-amber-900 w-full">
                    <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                    Login with Google
                </button>

            </div>
        </div>
    );
};

export default Signup;