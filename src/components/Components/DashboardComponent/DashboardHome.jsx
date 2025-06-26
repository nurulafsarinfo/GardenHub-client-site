import React, { useEffect, useState } from 'react';

const DashboardHome = () => {
    const [gardeners, setGardeners] = useState(0);
    const [totalTips, setTotalTips] = useState(0);

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

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-6">Dashboard Home</h1>

            <div className='md:flex space-y-5'>
                <div className='flex items-center gap-4 bg-green-500 w-full md:w-[300px] p-6 rounded-2xl shadow-lg'>
                    <h1 className='text-white text-xl'>Total Gardeners</h1>
                    <p className='text-5xl text-yellow-300 font-bold mt-1'>{gardeners}</p>
                </div>

                {/* total shared tips  */}
                <div className='flex items-center gap-4 bg-green-500 w-full md:w-[300px] p-6 rounded-2xl shadow-lg'>
                    <h1 className='text-white text-xl'>Total Shared Tips</h1>
                    <p className='text-5xl text-yellow-300 font-bold mt-1'>{totalTips}</p>
                </div>
            </div>

        </div>
    );
};

export default DashboardHome;
