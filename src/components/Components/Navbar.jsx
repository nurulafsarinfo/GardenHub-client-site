import React from 'react';
import logo from '../../assets/Garden-Hub Logo.png'
import { MdMenuOpen } from "react-icons/md";
import { NavLink } from 'react-router';




const Navbar = () => {
    return (
        <div className=''>
            <div className="navbar bg-green-500 shadow-lg md:px-16 px-10">
                <div className="navbar-start">
                    <img src={logo} className='md:w-12 w-10 md:h-12 h-10 rounded-full' alt="" />
                    <a className="font-semibold text-xl md:text-3xl text-white mx-2">GardenHub</a>
                </div>
                <div className="navbar-center  flex">
                    <NavLink to={'/'} className='text-xl font-medium text-amber-900 hover:bg-green-300
                    px-3 py-2 rounded-sm lg:inline-block hidden'>Home</NavLink>

                    <NavLink to={'/explore'} className='text-xl font-medium text-amber-900 hover:bg-green-300 px-2 py-2 rounded-sm lg:inline-block hidden'>Explore Gardeners </NavLink>

                    <NavLink to={'/tips'} className='text-xl font-medium text-amber-900 lg:inline-block hidden hover:bg-green-300 rounded-sm px-2 py-2'> Browse Tips </NavLink>
                </div>


                <div className="navbar-end">
                    <a className="btn text-amber-900 border-none bg-yellow-300 hover:bg-yellow-400">Button</a>
                    <div className="dropdown">

                        <div tabIndex={0} role="button" className="btn btn-ghost hover:bg-yellow-300 border-none mx-1  lg:hidden">
                            <MdMenuOpen className='text-amber-900' size={40} />
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm text-amber-900 dropdown-content bg-base-300 rounded-box z-1 mt-3 -ml-22 w-52 p-2 shadow">
                            <li><NavLink to={'/'} className=' md:text-lg text-sm font-medium text-amber-900 hover:bg-green-300
                            px-3 py-1 rounded-sm'>Home</NavLink></li>
                            <NavLink to={'/explore'} className=' md:text-lg text-sm font-medium text-amber-900 hover:bg-green-300 px-2 py-2 rounded-sm'>Explore Gardeners </NavLink>

                            <NavLink to={'/tips'} className=' md:text-lg text-sm font-medium text-amber-900 hover:bg-green-300 rounded-sm px-2 py-2'> Browse Tips </NavLink>
                            {/* <li>
                                <a>Parent</a>
                                <ul className="p-2">
                                    <li><a>Submenu 1</a></li>
                                    <li><a>Submenu 2</a></li>
                                </ul>
                            </li>
                            <li><a>Item 3</a></li> */}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;