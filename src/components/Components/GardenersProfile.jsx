import React from 'react';
import { MdOutlineLocationOn } from "react-icons/md";


const GardenersProfile = ({ gardener }) => {
    const { name, location, profile_pic, specialty, bio, experience_years } = gardener;

    return (
        <div className="w-full max-w-sm mx-auto bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-800">
            {/* Profile info section  */}
            <div className="bg-green-100 p-4 flex gap-4 items-center">
                <div className='relative'>
                    <img
                        className="w-20 h-20 rounded-full object-cover border-2 border-green-500 shadow-md"
                        src={profile_pic}
                        alt={ 'profile photo'}
                    />
                    <div className='w-4 h-4 rounded-full bg-green-500 border border-white absolute bottom-1 right-1'></div>
                </div>
                <div className="flex flex-col gap-1">
                    <h2 className="text-lg md:text-xl font-semibold text-gray-800">{name}</h2>
                    <div className="flex items-center gap-1 text-sm text-gray-600">
                        <MdOutlineLocationOn className="text-green-500" />
                        <span>{location}</span>
                    </div>
                    <p className="text-sm text-gray-500">Specialty:</p>
                    <p className="text-sm font-medium text-gray-700 italic">"{specialty}"</p>
                </div>
            </div>

            {/*Bio and Experience section*/}
            <div className="bg-blue-50 px-4 py-3 flex flex-col gap-2">
                <div className="flex justify-between items-center">
                    <p className="text-sm text-gray-600 font-medium">Experience:</p>
                    <p className="text-sm font-semibold text-gray-800">{experience_years} Years</p>
                </div>
                <div>
                    <p className="text-sm font-semibold text-gray-700 underline mb-1">Bio</p>
                    <p className="text-sm text-gray-600 leading-snug">{bio}</p>
                </div>
            </div>
        </div>
    );
};


// };

export default GardenersProfile;