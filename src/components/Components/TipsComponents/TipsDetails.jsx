import React, { useState } from 'react';
import { useLoaderData } from 'react-router';
import { FcLike } from "react-icons/fc";


const TipsDetails = () => {
    const data = useLoaderData();
    console.log("daata is", data);
    const { _id, name, email, title, plantType, level, category_level, description, totalLiked = 0 } = data;

    const [likes, setLikes] = useState(totalLiked)

    const handleCount = async () => {
        try {
            const res = await fetch(`http://localhost:3000/sharedtips/${_id}/like`, {
                method: 'PATCH',
                headers: { 'Content-Type': 'application/json' },
            });

            const updated = await res.json();
            setLikes(updated.totalLiked);
        } catch (error) {
            console.error('Failed to update likes', error);
        }
    };

    return (
        <div className='w-11/12 mx-auto h-[100vh] mt-5 mb-50  relative'>
            <div>
                <div className=' relative min-w-sm lg:h-[510px] md:h-[450px] h-[350px] border-2 border-amber-900 bg-base-200 dark:bg-gray-300 rounded-2xl p-3'>
                    <img className='lg:h-80 md:h-60 h-40 lg:min-w-100 md:min-w-80 max-w-60 absolute left-1/12 top-20 z-999 border-red-500 bg-amber-200 border-2 shadow-2xl drop-shadow-xl' src={data.images} alt="" />
                    <img className=' lg:h-80 md:h-60 h-40 border-2 shadow-xl drop-shadow-2xl z-888  border-green-500 absolute top-7 lg:right-5/12 md:right-4/12 right-3/12' src="https://i.postimg.cc/PxcY5bPh/tree-plant.jpg" alt="" />

                    <img className=' lg:h-80 md:h-60 h-40 border-2 border-blue-500 absolute top-36 lg:right-2/12 md:right-1/12 right-10 shadow-2xl drop-shadow-2xl'

                        src="https://i.postimg.cc/SKgcwb4n/tree-222-plant.webp" alt="" />


                    <h1 className='italic md:text-2xl text-lg font-medium absolute bottom-3 text-amber-900'>"{title}"</h1>
                </div>

                <div className=' my-5 px-10 space-y-2 dark:text-base-200'>
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
                    <div className='mt-8'>
                        <fieldset className='border-2 border-gray-400 p-4 rounded-md'>
                            <legend className='text-sm font-medium text-gray-600 px-2'>Description</legend>
                            <p className='text-gray-500'>{description}</p>
                        </fieldset>
                    </div>
                    <div className='my-8 flex justify-between items-center '>
                        <div className='flex flex-col'>
                            <p className='text-gray-600'>Contact with- </p>
                            <div className='flex gap-3'>
                                <p className='italic text-gray-400 font-semibold'>Email- </p>
                                <p className='text-sm italic text-gray-500'>{email}</p>
                            </div>
                        </div>
                        <div className='flex flex-col justify-center items-center'>
                            <p>{likes}</p>
                            <p>Total Like</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* // Like button  */}
            <button
                onClick={handleCount}
                className="fixed bottom-20 right-10 bg-green-500 hover:bg-green-600 w-16 h-16 flex items-center justify-center rounded-full shadow-lg transition-transform duration-200 ease-in-out active:scale-90 hover:scale-105"
                title="Like"
            >
                <FcLike size={32} />
            </button>
        </div>
    );
};

export default TipsDetails;