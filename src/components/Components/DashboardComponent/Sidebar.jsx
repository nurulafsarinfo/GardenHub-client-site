import React from 'react';
import { Link, NavLink } from 'react-router';
// import logo from '../../assets/Garden-Hub Logo.png'
import logo from '../../../assets/Garden-Hub Logo.png';


const Sidebar = () => {
    return (
        <div className='w-40 md:w-64 h-screen bg-amber-600/50 p-4 md:pl-8 sticky top-0'>


            <Link to={'/'}>
                <div className="navbar-start">
                    <img src={logo} className='md:w-10 w-8 md:h-10 h-8 rounded-full' alt="" />
                    <a className="font-semibold text-md md:text-2xl text-white dark:text-slate-900 mx-2">GardenHub</a>
                </div>
            </Link>

            <h2 className='text-xl md:text-3xl font-semibold mb-4 text-amber-900'>Dashboard</h2>

            <ul className='space-y-2'>

                <li><NavLink to={"/dashboard/home"} className={'text-lg md:text-2xl'}>Home</NavLink></li>
                <li><NavLink to={"//dashboard/mytips"} className={'text-lg md:text-2xl'}>My Tips</NavLink></li>
                <li><Link to={''}></Link></li>
                <li><Link to={''}></Link></li>

            </ul>
        </div>
    );
};

export default Sidebar;