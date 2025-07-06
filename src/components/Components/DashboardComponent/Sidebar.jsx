import React from 'react';
import { Link, NavLink } from 'react-router';
import logo from '../../../assets/Garden-Hub Logo.png';

const Sidebar = () => {

    const navLinkStyles = ({ isActive }) => 
        `block px-4 py-2 rounded-lg font-medium transition-colors duration-200 ${
            isActive 
                ? 'bg-white text-green-700 shadow'
                : 'text-white hover:bg-white/10'
        }`;


    return (
        <aside className="w-full md:w-64 h-screen bg-gradient-to-b from-green-700 to-green-500 text-white p-6 sticky top-0 flex flex-col">
            {/* Logo Section */}
            <Link to="/" className="flex items-center gap-3 mb-10 md:pt-0 pt-8">
                <img
                    src={logo}
                    alt="Garden Hub Logo"
                    className="w-10 h-10 rounded-full shadow-lg"
                />
                <span className="text-xl font-bold tracking-wide">GardenHub</span>
            </Link>

            {/* Sidebar Title */}
            <h2 className="text-lg md:text-xl font-semibold mb-6 text-yellow-100 uppercase tracking-wide border-b border-white/20 pb-2">
                Dashboard
            </h2>

            {/* Navigation Links */}
            <nav className="flex-1 space-y-2">
                <Link to="/dashboard" title='click to go home' className={'text-4xl px-10'}>
                    🏠
                </Link>
                <NavLink to="/dashboard/allTips" className={navLinkStyles}>
                    📚 All Tips
                </NavLink>
                <NavLink to="/dashboard/mytips" className={navLinkStyles}>
                    📝 My Tips
                </NavLink>
                <NavLink to="/dashboard/shareTips" className={navLinkStyles}>
                    ➕ Share Tips
                </NavLink>
            </nav>
        </aside>
    );
};

export default Sidebar;
