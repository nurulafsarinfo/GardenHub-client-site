import React from 'react';
import { useLoaderData } from 'react-router';
import { CiLocationOn } from "react-icons/ci";
import CountUp from 'react-countup';


const AllGardeners = () => {
    const allgardeners = useLoaderData();

    return (
        <div className='w-10/12 mx-auto my-10 overflow-x-auto'>
                <p className='text-5xl text-center text-amber-900 dark:text-green-600'>All Gardeners Profile</p>
            <div className='flex flex-wrap mx-auto sm:my-16 my-10 gap-10'>
                {
                    allgardeners.map(gardeners => {
                        return <div key={gardeners._id} className='rounded-md shadow-2xl drop-shadow-2xl'>

                            <div className='flex gap-3 p-2 min-w-sm md:w-[500px] mx-auto bg-indigo-200 h-35 rounded-t-md'>
                                <div>
                                    <img className='w-40 h-27 rounded-md' src={gardeners.profile_pic} alt="" />
                                </div>

                                <div className='w-70'>
                                    <div className='flex justify-between'>
                                        <p className='text-lg font-medium'>{gardeners.name}</p>
                                        <span className='px-2 py-1 bg-blue-400 text-white text-[13px] rounded-md'>{gardeners.gender}</span>
                                    </div>
                                    <div className='flex gap-1 items-center'>
                                        <CiLocationOn />
                                        <p className='text-xs'>{gardeners.location}</p>
                                    </div>

                                    <p className='italic text-sm mt-3'><span className='font-medium'>spc :</span>{gardeners.specialty}</p>

                                    <div className='flex gap-7'>
                                        <p><span className='font-medium italic mr-2'>Age: </span>{gardeners.age}</p>
                                        <p><span className='font-medium mr-3 italic'>exr:</span>{gardeners.experience_years}y</p>
                                    </div>

                                </div>
                            </div>
                            <div className='p-3 rounded-t-2xl rounded-b-md bg-slate-200 -mt-4  min-w-sm md:w-[500px]'>
                                <p className='flex-grow'>{gardeners.bio}</p>
                                <div className='flex gap-3 my-2'>
                                    <p className='italic font-medium underline'>Total_Shared_Tips:</p>
                                    <CountUp className='text-lg font-bold' end={gardeners.total_shared_tips} duration={8} />
                                </div>
                            </div>
                        </div>
                    }
                    )
                }
            </div>
        </div>


    );
};

export default AllGardeners;