import React, { use, useEffect, useState } from 'react';
import { Link, useLoaderData, useLocation } from 'react-router';
import { RiDeleteBin2Fill } from "react-icons/ri";
import { RiEdit2Fill } from "react-icons/ri";
import Swal from 'sweetalert2';
import Lottie from 'lottie-react';
import emptyList from '../../../assets/empty-list.json';
import { AuthContext } from '../../../Provider/AuthContext';



const MyTips = () => {
    const location = useLocation(); // for current path detect
    const { user } = use(AuthContext);

    const allTips = useLoaderData();
    const [mytips, setMytips] = useState([])
    const [loading, setLoading] = useState(true);
    // console.log("my tips-", mytips);
    // console.log("all tips-", allTips);



    // functionally controll data for home page and dashboard both side
    useEffect(() => {
        if (Array.isArray(allTips) && allTips.length > 0) {
            setMytips(allTips);
            setLoading(false);
        } else if (location.pathname.includes('/dashboard')) {
            if (!user?.email) return;

            fetch(`https://garden-hub-server-site.vercel.app/mytips/${user.email}`)
                .then((res) => res.json())
                .then((data) => {
                    console.log("dasjboard data", data)
                    setMytips(data);
                    setLoading(false);
                });
        }
    }, [allTips, user?.email, location.pathname]);



    if (loading) return <p>Loading Tips Data...</p>

    const handleDeleteTips = (id) => {
        // console.log(id);

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://garden-hub-server-site.vercel.app/sharedtips/${id}`, {
                    method: 'DELETE',
                })
                    .then(res => res.json())
                    .then(data => {
                        // console.log("after delete", data)
                        if (data.deletedCount) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your shared tip has been deleted.",
                                icon: "success"
                            });

                            const remainingData = mytips.filter(tips => tips._id !== id);
                            setMytips(remainingData);

                        }
                    })
            }
        })

    }

    return (
        <div>

            <div>

                {
                    mytips.length === 0 ?
                        <div className='w-full h-[80vh]'>
                            <Lottie animationData={emptyList} loop={true} className='w-full h-full' />
                        </div>

                        : <>
                            <h2 className='text-center text-2xl font-medium text-amber-900 my-3'>My Tips</h2>
                            <div className="overflow-x-auto my-5  mx-5 lg:mx-20">
                                <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
                                    <thead className="bg-yellow-300 text-amber-900 text-left text-sm">
                                        <tr>
                                            <th className="px-4 py-3 text-center">Image</th>
                                            <th className="px-4 py-3 text-center">Title</th>
                                            <th className="px-4 py-3 text-center">Category</th>
                                            <th className='px-3 py-3 text-center '>Total Like</th>
                                            <th className="px-4 py-3 text-center">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-gray-700">

                                        {
                                            mytips.map(tipsrow => {
                                                return (
                                                    <tr key={tipsrow._id} className="border-b border-b-yellow-300">
                                                        <td className="px-4 py-3 text-center">
                                                            <img
                                                                src={tipsrow.images}
                                                                alt="Plant 2"
                                                                className="w-16 h-16 object-cover rounded-md"
                                                            />
                                                        </td>
                                                        <td className="px-4 py-3 text-center">{tipsrow.title}</td>
                                                        <td className="px-4 py-3 text-center">{tipsrow.category_level
                                                        }</td>
                                                        <td className='text-center font-medium'>{tipsrow.totalLiked}</td>
                                                        <td className="px-4 py-3 text-center space-x-1">
                                                            <Link
                                                                to={`/tips/updatetips/${tipsrow._id}`}
                                                                className="inline-flex items-center justify-center bg-green-500 hover:bg-green-600 text-white px-4 py-1 rounded-md"
                                                            >
                                                                <RiEdit2Fill size={24} />

                                                            </Link>
                                                            <button onClick={() => handleDeleteTips(tipsrow._id)}
                                                                className="inline-flex items-center justify-center bg-green-500 hover:bg-green-600 text-white px-4 py-1 rounded-md"
                                                            >
                                                                <RiDeleteBin2Fill size={24} />
                                                            </button>
                                                        </td>
                                                    </tr>
                                                )
                                            })
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </>
                }
            </div>
        </div>
    );
};

export default MyTips;