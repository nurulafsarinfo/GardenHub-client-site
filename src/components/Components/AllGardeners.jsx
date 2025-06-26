import React from 'react';
import { useLoaderData } from 'react-router'; 
import { CiLocationOn } from "react-icons/ci";
import CountUp from 'react-countup';

const AllGardeners = () => {
    const allgardeners = useLoaderData();

    return (
        <div className="w-11/12 mx-auto my-8">
            <h2 className="text-3xl md:text-4xl lg:text-5xl text-center text-amber-900 dark:text-green-600 font-bold">
                All Gardeners Profile
            </h2>

            <div className="flex flex-wrap justify-center gap-8 mt-10">
                {allgardeners.map(gardener => (
                    <div
                        key={gardener._id}
                        className="max-w-md w-full bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden"
                    >
                        {/* Header */}
                        <div className="flex gap-4 p-4 bg-indigo-100 dark:bg-indigo-300">
                            <img
                                src={gardener.profile_pic}
                                alt={`Profile of ${gardener.name}`}
                                className="w-28 h-28 object-cover rounded-lg"
                            />

                            <div className="flex-1">
                                <div className="flex justify-between items-start">
                                    <p className="text-lg font-semibold text-gray-800 dark:text-white">{gardener.name}</p>
                                    <span className="px-2 py-1 text-xs bg-blue-500 text-white rounded">
                                        {gardener.gender}
                                    </span>
                                </div>
                                <div className="flex items-center text-sm text-gray-600 dark:text-gray-300 mt-1">
                                    <CiLocationOn className="mr-1" />
                                    {gardener.location}
                                </div>

                                <p className="text-sm italic mt-2 text-gray-700 dark:text-gray-300">
                                    <span className="font-medium">Specialty:</span> {gardener.specialty}
                                </p>

                                <div className="flex gap-4 mt-2 text-sm text-gray-700 dark:text-gray-200">
                                    <p><span className="font-medium">Age:</span> {gardener.age}</p>
                                    <p><span className="font-medium">Experience:</span> {gardener.experience_years} {gardener.experience_years > 1 ? 'yrs' : 'yr'}</p>
                                </div>
                            </div>
                        </div>

                        {/* Bio + Tips */}
                        <div className="bg-gray-100 rounded-t-2xl dark:bg-gray-700 p-4">
                            <p className="text-sm mb-3 text-gray-800 dark:text-gray-200">{gardener.bio}</p>
                            <div className="flex items-center gap-2 text-gray-800 dark:text-white">
                                <p className="font-medium italic underline">Total Shared Tips:</p>
                                <CountUp end={gardener.total_shared_tips} duration={3} className="text-lg font-bold" />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AllGardeners;
