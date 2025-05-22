import React from 'react';
import { Link, useLoaderData } from 'react-router';

const BrowseTips = () => {
    const alltips = useLoaderData();
    console.log("all tips ", alltips)


    return (
        <div>
            <div className="overflow-x-auto my-10">
                <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
                    <thead className="bg-green-500 text-amber-900 text-left text-sm">
                        <tr>
                            <th className="px-4 py-3">Image</th>
                            <th className="px-4 py-3">Title</th>
                            <th className="px-4 py-3">Category</th>
                            <th className="px-4 py-3">Action</th>
                        </tr>
                    </thead>
                    <tbody className="text-gray-700">

                        {
                            alltips.map(tipsrow => {
                                return (
                                    <tr key={tipsrow._id} className="border-b">
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
                                        <td className="px-4 py-3">
                                            <Link to={'/tips/browsetips'} className="bg-green-500 hover:bg-green-600 text-white px-4 py-1 rounded-md text-sm">
                                                See More
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

    );
};

export default BrowseTips;