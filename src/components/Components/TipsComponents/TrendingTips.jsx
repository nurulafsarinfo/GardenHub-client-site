import React, { useEffect, useState } from 'react';

const TrendingTips = () => {
    const [tipsData, setTipsData] = useState([])




    const handleCount = async (id) => {
        try {
            const res = await fetch(`https://garden-hub-server-site.vercel.app/sharedtips/${id}/like`, {
                method: 'PATCH',
                headers: { 'Content-Type': 'application/json' },
            });

            const updated = await res.json();
            setTipsData(prevTips =>
                prevTips.map(tip =>
                    tip._id === id ?
                        { ...tip, totalLiked: updated.totalLiked }
                        : tip
                )
            );
        } catch (error) {
            console.error('Failed to update likes', error);
        }
    };






    useEffect(() => {
        fetch('https://garden-hub-server-site.vercel.app/trendingtips')
            .then(res => res.json())
            .then(data => {
                setTipsData(data);
                console.log(data)

            })
            .catch(err => console.log("Trending tips data Error-", err))
    }, [])

    return (
        <div className='mt-20'>
            <h1 className='text-3xl text-amber-900 dark:text-green-600 text-center my-5'>Trending Tips</h1>
            <div className=' grid grid-cols-3 md:gap-10 gap-3'>
                {
                    tipsData.map(tipCardData => (
                        <div key={tipCardData._id} className="border p-4 rounded-lg shadow-md">
                            <img src={tipCardData.images} alt={tipCardData.title} className="w-full md:h-48 h-20 object-cover rounded" />
                            <h3 className="md:text-lg text-[10px] dark:text-gray-300 font-bold mt-2">{tipCardData.title}</h3>
                            <p className="md:text-sm text-[8px] text-gray-700 dark:text-gray-500">{tipCardData.description?.slice(0, 80)}...</p>

                            <div className="mt-3 flex justify-between items-center">
                                <p className="md:text-sm text-[8px] text-green-600 font-semibold">👍 {tipCardData.totalLiked} Likes</p>
                                <button onClick={() => handleCount(tipCardData._id)}
                                    className='bg-green-500 rounded md:px-2 px-1 text-white md:text-lg text-[5px] font-semibold'>🍓 Like</button>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )

};

export default TrendingTips;