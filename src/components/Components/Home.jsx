import React from 'react';
import { useLoaderData } from 'react-router';
import GardenersProfile from './GardenersProfile';
import SubscriptionPage from '../SubscriptionPage';
import Slider3D from '../SwiperSliderSection/Slider3D';
import TrendingTips from './TipsComponents/TrendingTips';
import GardeningQuiz from './GardeningQuiz';

const Home = () => {
    const gardenersProfile = useLoaderData();

    return (
        <div >
            <header className='w-11/12 mx-auto'>
                <Slider3D></Slider3D>
            </header>
           
            <section>
                <h1 className='text-3xl text-center text-amber-900 dark:text-green-600 mt-16'>Active Gardeners</h1>
                <div className='flex flex-wrap gap-3 mx-auto my-10 w-11/12'>

                    {
                        gardenersProfile?.map(gardener => <GardenersProfile key={gardener._id} gardener={gardener}></GardenersProfile>)
                    }
                </div>
            </section>
             <section className='w-11/12 mx-auto'>
                <TrendingTips></TrendingTips>
            </section>
            <section className='w-11/12 mx-auto'>
                <GardeningQuiz></GardeningQuiz>
            </section>

            <section className='w-11/12 mx-auto my-20'>
                <SubscriptionPage></SubscriptionPage>
            </section>

        </div>

    );
};

export default Home;