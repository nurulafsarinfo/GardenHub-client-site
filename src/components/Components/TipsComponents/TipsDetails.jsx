import React from 'react';
import { useLoaderData } from 'react-router';

const TipsDetails = () => {
    const data = useLoaderData();
    console.log("daata is", data);
    const { name,email, title, plantType, level, category_level, description } = data;


    return (
        <div className='w-11/12 mx-auto h-[100vh] mt-5 mb-20 bg-base-100'>
            <div>
                <div className=' relative min-w-sm lg:h-[510px] md:h-[450px] h-[350px] border-2 border-amber-900 bg-base-200 rounded-2xl p-3'>
                    <img className='lg:h-80 md:h-60 h-40 lg:min-w-100 md:min-w-80 max-w-60 absolute left-1/12 top-20 z-999 border-red-500 border-2 shadow-2xl drop-shadow-xl' src={data.images} alt="" />
                    <img className=' lg:h-80 md:h-60 h-40 border-2 shadow-xl drop-shadow-2xl z-888  border-green-500 absolute top-7 lg:right-5/12 md:right-4/12 right-3/12' src="https://i.postimg.cc/PxcY5bPh/tree-plant.jpg" alt="" />

                    <img className=' lg:h-80 md:h-60 h-40 border-2 border-blue-500 absolute top-36 lg:right-2/12 md:right-1/12 right-10 shadow-2xl drop-shadow-2xl'

                        src="https://i.postimg.cc/SKgcwb4n/tree-222-plant.webp" alt="" />


                    <h1 className='italic md:text-2xl text-lg font-medium absolute bottom-3 text-amber-900'>"{title}"</h1>
                </div>

                <div className=' my-5 px-10 space-y-2'>
                    <h1 className='italic underline'>Tips shared by- <b>
                        <i>"{name}</i>" </b></h1>
                    <div className='flex justify-between '>
                        <p className='text-lg'>Level: </p>
                        <p className='font-semibold'>{level}</p>
                    </div>

                    <div className='flex justify-between '>
                        <p className='text-lg'>Plant_Type:</p>
                        <p>{plantType}</p>
                    </div>
                    <div className='flex justify-between '>
                        <p className='text-lg'>Category:</p>
                        <p>{category_level}</p>
                    </div>
                    <div>
                        <fieldset className='border-2 border-gray-400 p-4 rounded-md'>
                            <legend className='text-sm font-medium text-gray-600 px-2'>Description</legend>
                            <p className='text-gray-500'>{description}</p>
                        </fieldset>
                    </div>
                    <div>
                        <p className='text-gray-600'>Contact with- </p>
                        <div className='flex gap-3'>
                            <p className='italic text-gray-400 font-semibold'>Email- </p>
                            <p className='text-sm italic text-gray-500'>{email}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TipsDetails;