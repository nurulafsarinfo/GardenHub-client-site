import React from 'react';

const Loader = () => {
    return (
        <div className='flex gap-3 justify-center items-center h-[80vh]'>
            <span className="loading loading-ring w-10"></span>
            <span className="loading loading-ring w-16"></span>
            <span className="loading loading-ring w-10"></span>
        </div>
    );
};

export default Loader;