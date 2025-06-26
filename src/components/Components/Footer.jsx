import React from 'react';
import { FaRegCopy } from 'react-icons/fa';
import { IoIosArrowRoundForward } from "react-icons/io";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from 'react-icons/fa6';
import logo from '../../assets/Garden-Hub Logo.png'
import { NavLink } from 'react-router';


const Footer = () => {
    return (
        <div className='dark:bg-gray-500 bg-amber-100 text-green-900 py-6 w-full '>
            <div className='text-green-900 md:p-18 p-10'>
                <div className='lg:flex md:flex-wrap flex-col gap-5 justify-between'>
                    <div>

                        <div className='flex items-center my-2'>
                            <img src={logo} className='md:w-12 w-10 md:h-12 h-10 rounded-full' alt="" />
                            <a className="font-semibold text-xl md:text-3xl text-slate-800 dark:text-green-500 mx-2">GardenHub</a>
                        </div>

                        <p>Contact Info</p>
                        <p className='text-4xl my-2'>Let's Discuss Your <br />
                            Vision. With Us</p>


                        <p className='mt-4 mb-1'> Email Us At</p>
                        <span className="flex items-center gap-2 bg-slate-300 text-gray-500 font-semibold w-200px py-2 px-4 rounded-full hover:bg-gray-400 hover:text-gray-200 transition">
                            mdnurulafsar123afsar@gmail.com <FaRegCopy className='' />
                        </span>

                    </div>


                    <div>
                        <p className='md:text-2xl text-xl font-medium mt-5 mb-3'>Quick Links</p>

                        <ul>
                            <li><NavLink to={'/'} className='text-xl hover:underline  font-medium text-amber-900 
                        px-3 py-2'>Home</NavLink></li>
                            <li><NavLink to={'/explorgardeners'} className='text-xl hover:underline  font-medium text-amber-900 
                        px-3 py-2'>Gardeners</NavLink></li>
                            <li><NavLink to={'/tips/browsetips'} className='text-xl hover:underline  font-medium text-amber-900 
                        px-3 py-2'>Browse Tips</NavLink></li>
                            <li>
                                <NavLink to={'/sharetips'} className='text-xl font-medium hover:underline text-amber-900 px-2 py-2'> Share Tips </NavLink>
                            </li>
                        </ul>



                    </div>


                    <div className='my-8'>
                        <p className='md:text-2xl text-xl font-medium mb-3'>Terms & Conditions</p>
                        <ul className=' text-sm'>
                            <li className='hover:underline'>Use of Services</li>
                            <li className='hover:underline'>Prohibited Conduct</li>
                            <li className='hover:underline'>Intellectual Property</li>
                            <li className='hover:underline'>Limitation of Liability</li>
                            <li className='hover:underline'>User Accounts & Security</li>
                        </ul>
                    </div>

                    <div className='space-y-5'>
                        <p className='md:text-2xl text-lg font-medium'>Social Link</p>
                        <div className='lg:inline-block flex gap-2'>

                            <a href="https://twitter.com" target='_blank'> <FaXTwitter className='hover:bg-yellow-200 p-1  rounded-sm' size={40} /></a>

                            <a href="https://facebook.com" target='_blank'> <FaFacebook className='hover:bg-yellow-200 p-1  rounded-sm' size={40} /></a>

                            <a href="https://instagram.com" target='_blank'> <FaInstagram className='hover:bg-yellow-200 p-1  rounded-sm' size={40} /></a>

                            <a href="https://linkedin.com" target='_blank'> <FaLinkedin className='hover:bg-yellow-200 p-1  rounded-sm' size={40} /></a>
                        </div>
                    </div>

                </div>
            </div>

            <div>
                <hr className='text-gray-300' />
                <p className="text-center text-sm text-gray-600 py-2">
                    &copy; 2025 GardenHub. All rights reserved.
                </p>
            </div>
        </div >
    );
};

export default Footer;