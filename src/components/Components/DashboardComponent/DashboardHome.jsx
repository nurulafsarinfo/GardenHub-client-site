import React, { use, useEffect, useState } from 'react';
import { AuthContext } from '../../../Provider/AuthContext';

const DashboardHome = () => {
    const { user } = use(AuthContext);
    const [gardeners, setGardeners] = useState(0);
    const [totalTips, setTotalTips] = useState(0);
    const [totalaMyTips, setTotalMyTips] = useState(0);


    useEffect(() => {
        fetch('https://garden-hub-server-site.vercel.app/gardeners/count')
            .then(res => res.json())
            .then(data => setGardeners(data.total));
    }, []);

    useEffect(() => {
        fetch('https://garden-hub-server-site.vercel.app/sharedtips/count')
            .then(res => res.json())
            .then(data => setTotalTips(data.totalTips));
    }, [])

    // get my total shared tips 
    useEffect(() => {
        if (user?.email) {
            fetch(`https://garden-hub-server-site.vercel.app/mytips/${user.email}?mode=count`)
                .then(res => res.json())
                .then(data => {
                    console.log("MyTips count response:", data);
                    setTotalMyTips(data.myTips);
                })
                .catch(err => console.log("Fetch error:", err));
        }
    }, [user?.email]);

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-6">Dashboard Home</h1>

            <div className='mb-8'>
                <p className='font-bold text-xl text-gray-600 mt-6'>Your Profile</p>
                <div className='flex flex-col items-center md:w-[350px] w-full my-3 md:p-8 p-6 rounded-2xl bg-gradient-to-br from-green-500 to-yellow-300'>
                    <div >
                        <img src={user.photoURL} alt="User profile image" className='rounded-full' />
                    </div>
                    <div className='text-center mt-4'>
                        <p className='font-semibold text-3xl text-white'>{user.displayName}</p>
                        <p className='text-gray-500 md:text-lg'>{user.email}</p>
                    </div>
                </div>
            </div>

            <div className='md:flex gap-4 space-y-5 '>

                {/* total shared tips  */}
                <div className='flex items-center gap-4 bg-gradient-to-b from-green-500 to-yellow-300/70 w-full md:w-[300px] p-4 rounded-2xl shadow-lg'>
                    <h1 className='text-white text-xl'>My Total Shared Tips</h1>
                    <p className='text-5xl text-yellow-300 font-bold mt-1'>{totalaMyTips}</p>
                </div>

                <div className='flex items-center gap-4 bg-green-500 w-full md:w-[300px] p-6 rounded-2xl shadow-lg'>
                    <h1 className='text-white text-xl'>Total Gardeners</h1>
                    <p className='text-5xl text-yellow-300 font-bold mt-1'>{gardeners}</p>
                </div>



                {/* total shared tips  */}
                <div className='flex items-center gap-4 bg-green-500 w-full md:w-[300px] p-4 rounded-2xl shadow-lg'>
                    <h1 className='text-white text-xl'>Total Shared Tips</h1>
                    <p className='text-5xl text-yellow-300 font-bold mt-1'>{totalTips}</p>
                </div>
            </div>



        </div>
    );
};

export default DashboardHome;
