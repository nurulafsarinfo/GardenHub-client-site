import React from 'react';
import { IoIosArrowRoundForward } from "react-icons/io";
const Footer = () => {
    return (
        <div className='bg-amber-100 text-green-900 py-6 h-80 w-full p-18'>
            <div>
                <div>
                    <p>Contact Info</p>
                    <p className='text-4xl my-2'>Let's Discuss Your <br />
                        Vision. With Us</p>

                    <button className="flex bg-yellow-200 text-amber-900 font-semibold py-2 px-4 rounded-full hover:bg-yellow-400 transition">
                        Shedule a call now <IoIosArrowRoundForward className='w-10 h-6' size={30}/>
                    </button>

                    <p>Or Email Us At</p>
                                        <button className="flex bg-yellow-200 text-amber-900 font-semibold py-2 px-4 rounded-full hover:bg-yellow-400 transition">
                        Shedule a call now <IoIosArrowRoundForward className='w-10 h-6' size={30}/>
                    </button>

                </div>

                <div>
                    <p>Terms & Conditions</p>
                </div>

                <div>
                    <p>Social Link</p>
                </div>

            </div>
        </div >
    );
};

export default Footer;