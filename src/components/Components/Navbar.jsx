import React, { use } from 'react';
import logo from '../../assets/Garden-Hub Logo.png'
import { MdMenuOpen } from "react-icons/md";
import { Link, NavLink, useNavigate } from 'react-router';
import { AuthContext } from '../../Provider/AuthContext';
import { GiFarmer } from "react-icons/gi";
import Loader from './Loader';
import { signOut } from 'firebase/auth';
import auth from '../../../firebase.init';
import { toast } from 'react-toastify';
import Swal from 'sweetalert2';






const Navbar = () => {
    const { user } = use(AuthContext);
    const navigate = useNavigate();

    // console.log("photo url ", user.photoURL)

    // if(loading && !user){
    //     return <Loader></Loader>
    // }

    const handleSignOut = () => {
        signOut(auth)
            .then(() => {
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Sign Out Successful.",
                    showConfirmButton: false,
                    timer: 2000
                });
                navigate('/')
            })
            .catch(error => {
                toast.error("Sorry!", error.message);
            })
    }

    return (
        <div className=''>
            <div className="navbar bg-green-500 shadow-lg md:px-14 px-8">
                <div className="navbar-start">
                    <img src={logo} className='md:w-12 w-10 md:h-12 h-10 rounded-full' alt="" />
                    <a className="font-semibold text-xl md:text-3xl text-white mx-2">GardenHub</a>
                </div>
                <div className="navbar-center  flex">
                    <NavLink to={'/'} className='text-xl font-medium text-amber-900 hover:bg-green-300
                    px-3 py-2 rounded-sm lg:inline-block hidden'>Home</NavLink>

                    <NavLink to={'/tips/browsetips'} className='text-xl font-medium text-amber-900 lg:inline-block hidden hover:bg-green-300 rounded-sm px-2 py-2'> Browse Tips </NavLink>

                    <NavLink to={'/sharetips'} className='text-xl font-medium text-amber-900 lg:inline-block hidden hover:bg-green-300 rounded-sm px-2 py-2'> Share Tips </NavLink>

                    <NavLink to={`/tips/mytips/${user?.email}`} className='text-xl font-medium text-amber-900 lg:inline-block hidden hover:bg-green-300 rounded-sm px-2 py-2'> My Tips </NavLink>
                </div>


                <div className="navbar-end">
                    {
                        user ? <button onClick={handleSignOut} className="btn md:inline-block hidden text-amber-900 border-none bg-yellow-300 hover:bg-yellow-400">SignOut</button> :
                            <a className="btn md:inline-block hidden text-amber-900 border-none bg-yellow-300 hover:bg-yellow-400 mx-1">Login</a>
                    }

                    {
                        user ? <div> <img className='w-11 h-11 mx-1 rounded-full border-3 border-yellow-300 bg-white' src={user.photoURL} alt="" /></div> : <GiFarmer className='border-2 border-yellow-300 rounded-full' size={40} />
                    }



                    <div className="dropdown">
                        {/* Menubar for small Device   */}
                        <div tabIndex={0} role="button" className="btn btn-ghost hover:bg-yellow-300 border-none mx-1  lg:hidden">
                            <MdMenuOpen className='text-amber-900' size={40} />
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm text-amber-900 dropdown-content bg-base-300 rounded-box z-1 mt-3 -ml-22 w-52 p-2 shadow">

                            <NavLink to={'/'} className=' md:text-lg text-sm font-medium text-amber-900 hover:bg-green-300
                            px-2 py-3 rounded-sm'>Home</NavLink>

                            <NavLink to={'/sharetips'} className=' md:text-lg text-sm font-medium text-amber-900 hover:bg-green-300 rounded-sm px-2 py-3'> Share Tips </NavLink>

                            <NavLink to={'/tips/browsetips'} className=' md:text-lg text-sm font-medium text-amber-900 hover:bg-green-300 rounded-sm px-2 py-3'> Browse Tips </NavLink>

                            <NavLink to={`/tips/mytips/${user?.email}`} className=' md:text-lg text-sm font-medium text-amber-900 hover:bg-green-300 rounded-sm px-2 py-3'> My Tips </NavLink>

                            {
                                user ? <button onClick={handleSignOut} className="btn text-amber-900 border-none bg-yellow-300 hover:bg-yellow-400">SignOut</button> :
                                    <Link to={'/login'} className="btn text-amber-900 border-none bg-yellow-300 hover:bg-yellow-400">Login</Link>
                            }



                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;