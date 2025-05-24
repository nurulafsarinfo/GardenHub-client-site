import React, { use, useState } from 'react';
import { Link, useLoaderData } from 'react-router';
import { AuthContext } from '../../../Provider/AuthContext';
import Loader from '../Loader';

const BrowseTips = () => {
    const { loading } = use(AuthContext);
    const initialTips = useLoaderData();
    const [alltips, setAllTips] = useState(initialTips);
    const [selectedDifficulty, setSelectedDifficulty] = useState("All")


    const filteredTips = async (difficulty) => {

        try {
            // let url = 'http://localhost:3000/sharedtips';
            // if (difficulty && difficulty !== 'All') {
            //     url += `?difficulty=${difficulty}`;
            // }

            const url = difficulty === 'All' 
            ? 'http://localhost:3000/sharedtips' 
            : `http://localhost:3000/sharedtips?difficulty=${difficulty}`

            // console.log('Fetching from: ', url)
            const response = await fetch(url);
            if (!response.ok) throw new Error('Network response was not ok')
            const data = await response.json();
            // console.log('dataa is ', data)
            setAllTips(data);
        } catch (error) {
            console.log("Error fetching tips:", error);
        } finally {
            console.log("finnaly done filterd tips")
        }

    }

    const handleFilterChange = (e) => {
        const difficulty = e.target.value;
        // console.log("filterd difficulty value ", difficulty);
        setSelectedDifficulty(difficulty);
        filteredTips(difficulty);
    }


    return (
        <div>
            <div className="overflow-x-auto my-10 mx-20">
                <div className='my-5'>
                    <label className='mr-3 text-amber-900 dark:text-base-200'>Filter by Difficulty Level:</label>
                    <select
                        value={selectedDifficulty}
                        onChange={handleFilterChange}
                        className='border border-amber-900 dark:border-gray-300 text-amber-900 dark:text-gray-400 px-2 py-1  rounded-md' >
                        <option value="All">All</option>
                        <option value="easy">Easy</option>
                        <option value="medium">Medium</option>
                        <option value="hard">Hard</option>
                    </select>
                </div>

                {loading ?
                    <Loader></Loader> :
                    <table className="min-w-full  bg-white shadow-md rounded-lg overflow-hidden">
                        <thead className="bg-green-500 text-amber-900 text-left text-sm ">
                            <tr>
                                <th className="px-8 py-3 text-center">Image</th>
                                <th className="px-4 py-3 text-center">Title</th>
                                <th className="px-4 py-3 text-center">Category</th>
                                <th className="px-4 py-3 text-center">Level</th>
                                <th className="px-4 py-3 text-center">Action</th>
                            </tr>
                        </thead>
                        <tbody className="text-gray-700">

                            {
                                alltips.map(tipsrow => {
                                    return (
                                        <tr key={tipsrow._id} className="border-b border-b-amber-800">
                                            <td className="px-7 py-3 text-center">
                                                <img
                                                    src={tipsrow.images}
                                                    alt="Plant 2"
                                                    className="w-16 h-16 object-cover rounded-md"
                                                />
                                            </td>
                                            <td className="px-4 py-3 ">{tipsrow.title}</td>
                                            <td className="px-4 py-3 text-center">{tipsrow.category_level
                                            }</td>
                                            <td className='text-center'>{tipsrow.level}</td>
                                            <td className="px-4 py-3 text-center">
                                                <Link to={`/tips/details/${tipsrow._id}`} className="bg-green-500 hover:bg-green-600 text-white px-4 py-1 rounded-md text-sm">
                                                    See More
                                                </Link>
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                }
            </div>
        </div>

    );
};

export default BrowseTips;


