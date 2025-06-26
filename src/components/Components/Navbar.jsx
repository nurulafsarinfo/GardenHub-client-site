import React, { use } from 'react';
import logo from '../../assets/Garden-Hub Logo.png'
import { MdMenuOpen } from "react-icons/md";
import { Link, NavLink, useNavigate } from 'react-router';
import { AuthContext } from '../../Provider/AuthContext';
import { GiFarmer } from "react-icons/gi";
import { signOut } from 'firebase/auth';
import auth from '../../firebase.init';
import { toast } from 'react-toastify';
import Swal from 'sweetalert2';
import ThemeToggle from '../../Hooks/ThemeToggle';



const Navbar = () => {
    const { user } = use(AuthContext);
    const navigate = useNavigate();

    // if(loading && !user){
    //     return <Loader></Loader>
    // }

    const links = <>
        <li><NavLink to={'/'} className='text-sm font-medium text-amber-900 hover:bg-green-300 px-3 py-2 rounded-sm lg:inline-block hidden'>Home</NavLink></li>
        <li><NavLink to={'/explorgardeners'} className='text-sm font-medium text-amber-900 lg:inline-block hidden hover:bg-green-300 rounded-sm px-2 py-2'> Gardeners </NavLink></li>
        <li><NavLink to={'/tips/browsetips'} className='text-sm font-medium text-amber-900 lg:inline-block hidden hover:bg-green-300 rounded-sm px-2 py-2'> Browse Tips </NavLink></li>
        <li>
            <NavLink to={'/sharetips'} className='text-sm font-medium text-amber-900 lg:inline-block hidden hover:bg-green-300 rounded-sm px-2 py-2'> Share Tips </NavLink></li>
        <li></li>
    </>

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

        <div className="navbar  bg-[#98CD00]/80 backdrop-blur-md dark:bg-emerald-600/70 shadow-md md:px-14 px-8  transition duration-300">

            <div className="navbar-start">
                <img src={logo} className='md:w-12 w-10 md:h-12 h-10 rounded-full' alt="" />
                <a className="font-semibold text-xl md:text-3xl text-white dark:text-slate-900 mx-2">GardenHub</a>
            </div>
            <div className="navbar-center  ">
                <ul className='flex'>
                    {
                        links
                    }

                    {
                        user ?
                            <>
                                <NavLink to={`/tips/mytips/${user?.email}`} className='text-sm font-medium text-amber-900 lg:inline-block hidden hover:bg-green-300 rounded-sm px-2 py-2'> My Tips </NavLink>

                                <NavLink to={`/dashboard`} className='text-sm font-medium text-amber-900 lg:inline-block hidden hover:bg-green-300 border rounded-sm px-2 py-2'> Dashboard </NavLink>
                            </> : ''
                    }
                </ul>





            </div>


            <div className="navbar-end">
                {
                    user ? <button onClick={handleSignOut} className="btn md:inline-block hidden text-amber-900 border-none bg-yellow-300 hover:bg-yellow-400">SignOut</button> :
                        <Link to={'/login'} className="btn md:inline-block hidden py-2 text-amber-900 mx-1 border-none bg-yellow-300 hover:bg-yellow-400">Login</Link>
                }

                <span className='mx-2 h-8'>
                    {/* <DarkModeSwitch checked={theme === "dark"} onChange={toggle} size={25} /> */}
                    <ThemeToggle></ThemeToggle>
                </span>

                {
                    user ?
                        <div className='dropdown dropdown-end'>
                            <div tabIndex={0} role='button'>

                                <div className='tooltip tooltip-info tooltip-bottom' data-tip={user.displayName}>
                                    <img className='w-11 h-11 mx-1 rounded-full border-3 border-yellow-300 bg-white' src={user.photoURL} alt="" />
                                </div>

                            </div>
                            <ul tabIndex={0} className='z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-200 rounded-box w-40'>
                                <li>
                                    <button onClick={handleSignOut} className="btn text-amber-900 border-none bg-yellow-300 hover:bg-yellow-400 text-lg">SignOut</button>
                                </li>
                            </ul>
                        </div>

                        : <div className='tooltip tooltip-bottom' data-tip="Guest User"> <GiFarmer className='border-2 border-yellow-300 rounded-full' size={40} /></div>
                }



                <div className="dropdown">
                    {/* Menubar for small Device   */}
                    <div tabIndex={0} role="button" className="btn btn-ghost hover:bg-yellow-300 border-none mx-1  lg:hidden">
                        <MdMenuOpen className='text-amber-900' size={40} />
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm text-amber-900 dropdown-content bg-base-300 rounded-box z-1 mt-3 -ml-22 w-52 p-2 shadow ">

                        <NavLink to={'/'} className=' text-sm font-medium text-amber-900 hover:bg-green-300
                            px-2 py-3 rounded-sm'>Home</NavLink>

                        <NavLink to={'/dashboard'} className='  text-sm font-medium text-amber-900 hover:bg-green-300 rounded-sm px-2 py-3'>  Dashboard </NavLink>

                        <NavLink to={'/explorgardeners'} className='  text-sm font-medium text-amber-900 hover:bg-green-300 rounded-sm px-2 py-3'> Explore Gardeners </NavLink>


                        <NavLink to={'/sharetips'} className='  text-sm font-medium text-amber-900 hover:bg-green-300 rounded-sm px-2 py-3'> Share Tips </NavLink>

                        <NavLink to={'/tips/browsetips'} className='  text-sm font-medium text-amber-900 hover:bg-green-300 rounded-sm px-2 py-3'> Browse Tips </NavLink>

                        <NavLink to={`/tips/mytips/${user?.email}`} className='  text-sm font-medium text-amber-900 hover:bg-green-300 rounded-sm px-2 py-3'> My Tips </NavLink>

                        {/* <NavLink to={`/tips/mytips/${user?.email}`} className='text-xl font-medium text-amber-900 lg:inline-block hidden hover:bg-green-300 rounded-sm px-2 py-2'> My Tips </NavLink> */}






                        {
                            user ? <button onClick={handleSignOut} className="btn text-amber-900 border-none bg-yellow-300 hover:bg-yellow-400">SignOut</button> :
                                <Link to={'/login'} className="btn text-amber-900 border-none bg-yellow-300 hover:bg-yellow-400">Login</Link>
                        }



                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;