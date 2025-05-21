import React from 'react';
import { useLoaderData } from 'react-router';
import GardenersProfile from './GardenersProfile';

const Home = () => {
    const gardenersProfile = useLoaderData();
    console.log(gardenersProfile);
    return (
        <div className='flex flex-wrap gap-3 mx-auto w-11/12'>
            {
                gardenersProfile.map(gardener => <GardenersProfile key={gardener._id} gardener={gardener}></GardenersProfile>)
            }
        </div>
    );
};

export default Home;