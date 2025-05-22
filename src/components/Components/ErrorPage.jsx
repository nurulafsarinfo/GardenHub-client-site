import React from "react";

import Lottie from "lottie-react";
import { Link } from 'react-router';
import errorLottieAnimation from "../../assets/errorPagelottieAnimation.json";

const ErrorPage = () => {
    return (
        <div className='relative'>
    
            <Lottie className='w-[100vw] h-[100vh] object-cover'
                animationData={errorLottieAnimation} />

            <div className="absolute inset-0 flex items-center justify-center">
                <div className="mt-[150px]">
                    <Link to="/"
                        className="group relative inline-flex items-center justify-center px-8 py-4 overflow-hidden font-medium text-white transition duration-300 ease-out border border-blue-600 rounded-full shadow-md bg-blue-600 hover:bg-white hover:text-blue-600"
                    >
                        <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-blue-700 group-hover:translate-x-0 ease">
                            <svg
                                className="w-5 h-5"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                viewBox="0 0 24 24"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h11M3 14h11m4-4l4 4m0-4l-4 4" />
                            </svg>
                        </span>
                        <span className="absolute flex items-center justify-center w-full h-full text-white transition-all duration-300 transform group-hover:translate-x-full ease">
                            Back to Home
                        </span>
                        <span className="relative invisible">Back to Home</span>
                    </Link>
                </div>
            </div>
        </div>




    );
};

export default ErrorPage;