import React, { use } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../../Provider/AuthContext';
import { toast } from 'react-toastify';
import Swal from 'sweetalert2';

const Login = () => {
    const { loginUser, googleLogin, setUser } = use(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const handleLogInUser = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        loginUser(email, password)
            .then(result => {
                const user = result.use;
                setUser(user);
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Logged in Successfully!",
                    showConfirmButton: false,
                    timer: 1500
                });
                console.log("after login ", user);
                navigate(`${location.state ? location.state : '/'}`)
            })
            .catch(error => {
                console.log('login error- ', error.message);
                toast.error(error.message);
            })
    }


    // user sign up method with Google
    const handleGoogleSignin = () => {
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
                <form onSubmit={handleLogInUser} >
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

                    <button className='w-full md:text-2xl bg-green-500 py-2 rounded-2xl mt-7 text-amber-900 font-bold'>LogIn Now</button>

                    <p className='text-amber-900 md:text-lg text-xs mt-2'>Don't have an account? <Link to='/signup' className='underline text-green-600'>Register</Link></p>
                </form>

                
                <div className='flex justify-around text-gray-400 my-5'>
                    <p>----------------</p><span>Or</span> <p>----------------</p>
                </div>

                {/*  google sign in button  */}
                <button onClick={handleGoogleSignin} className="btn bg-white text-black border-amber-900 w-full">
                    <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                    Login with Google
                </button>
            </div>
        </div>
    );
};

export default Login;