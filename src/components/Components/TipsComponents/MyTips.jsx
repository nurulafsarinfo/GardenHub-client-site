import React from 'react';
import { Link, useLoaderData } from 'react-router';
import { RiDeleteBin2Fill } from "react-icons/ri";
import { RiEdit2Fill } from "react-icons/ri";



const MyTips = () => {
    const mytips = useLoaderData();
    console.log("my tips-", mytips);

    return (
        <div>
            <div>
                <div className="overflow-x-auto my-10 mx-20">
                    <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
                        <thead className="bg-yellow-300 text-amber-900 text-left text-sm">
                            <tr>
                                <th className="px-4 py-3">Image</th>
                                <th className="px-4 py-3">Title</th>
                                <th className="px-4 py-3">Category</th>
                                <th className="px-4 py-3">Action</th>
                            </tr>
                        </thead>
                        <tbody className="text-gray-700">

                            {
                                mytips.map(tipsrow => {
                                    return (
                                        <tr key={tipsrow._id} className="border-b border-b-yellow-300">
                                            <td className="px-4 py-3">
                                                <img
                                                    src={tipsrow.images}
                                                    alt="Plant 2"
                                                    className="w-16 h-16 object-cover rounded-md"
                                                />
                                            </td>
                                            <td className="px-4 py-3">{tipsrow.title}</td>
                                            <td className="px-4 py-3">{tipsrow.category_level
                                            }</td>
                                            <td className="px-4 py-3 space-x-1">
                                                <Link
                                                    to={`/tips/updatetips/${tipsrow._id}`}
                                                    className="inline-flex items-center justify-center bg-green-500 hover:bg-green-600 text-white px-4 py-1 rounded-md"
                                                >
                                                     <RiEdit2Fill size={24}/>
                                                    
                                                </Link>
                                                <Link
                                                    to={`/tips/details/${tipsrow._id}`}
                                                    className="inline-flex items-center justify-center bg-green-500 hover:bg-green-600 text-white px-4 py-1 rounded-md"
                                                >
                                                   <RiDeleteBin2Fill size={24} />
                                                </Link>
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyTips;