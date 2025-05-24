import React from 'react';
import { useLoaderData } from 'react-router';
import GardenersProfile from './GardenersProfile';
import SubscriptionPage from '../SubscriptionPage';

const Home = () => {
    const gardenersProfile = useLoaderData();

    return (
        <div >
            <div >
            <h1 className='text-3xl text-center text-amber-900 dark:text-green-600 mt-16'>Active Gardeners</h1>
            <div className='flex flex-wrap gap-3 mx-auto my-10 w-11/12'>

                {
                    gardenersProfile.map(gardener => <GardenersProfile key={gardener._id} gardener={gardener}></GardenersProfile>)
                }
                </div>
            </div>
            <div className='w-11/12 mx-auto my-20'>
                <SubscriptionPage></SubscriptionPage>
            </div>

        </div>

    );
};

export default Home;