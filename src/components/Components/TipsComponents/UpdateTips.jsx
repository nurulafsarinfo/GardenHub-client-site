import React, { use } from 'react';
import { useLoaderData } from 'react-router';
import { AuthContext } from '../../../Provider/AuthContext';
import Swal from 'sweetalert2';

const UpdateTips = () => {
    const { user } = use(AuthContext);
    const data = useLoaderData();

    const {
        _id, availability, category_level, description,
        images, level, plantType, title
    } = data;

    const handleUpdateTips = (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const updatedTips = Object.fromEntries(formData.entries());

        fetch(`https://garden-hub-server-site.vercel.app/updatetips/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedTips)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Update & Modify Successfully!',
                        showConfirmButton: false,
                        timer: 2000
                    });
                } else {
                    Swal.fire({
                        position: 'center',
                        icon: 'warning',
                        title: 'Please modify something!',
                        showConfirmButton: false,
                        timer: 2000
                    });
                }
            })
            .catch(err => console.log(err.message));
    };

    return (
        <div className='md:mx-20 mx-5'>
            <div className='shadow-2xl border-3 border-green-200 rounded-2xl mx-auto my-10 p-10 bg-green-100'>
                <form onSubmit={handleUpdateTips}>
                    <p className='md:text-3xl text-2xl text-green-600 font-bold text-center mb-5'>Update Form</p>

                    <div className='grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10'>
                        {/* Left Column */}
                        <div>
                            <label className='label md:text-2xl text-amber-900'>Title</label>
                            <input type="text" name="title" defaultValue={title}
                                className='border-2 bg-slate-100 text-amber-900 text-sm md:text-lg p-2 rounded-2xl my-2 w-full' required />

                            <label className='label md:text-2xl text-amber-900'>Plant Type/Topic</label>
                            <input type="text" name="plantType" defaultValue={plantType}
                                className='border-2 bg-slate-100 text-amber-900 text-sm md:text-lg p-2 rounded-2xl my-2 w-full' required />

                            <label className='label md:text-2xl text-amber-900'>Difficulty Level</label>
                            <select name="level" defaultValue={level}
                                className='border-2 bg-slate-100 text-amber-900 text-sm md:text-lg p-2 rounded-2xl my-2 w-full'>
                                <option value="" disabled hidden>Select one...</option>
                                <option value="easy">Easy</option>
                                <option value="medium">Medium</option>
                                <option value="hard">Hard</option>
                            </select>

                            <label className='label md:text-2xl text-amber-900'>Image URL</label>
                            <input type="url" name="images" defaultValue={images}
                                className='border-2 bg-slate-100 text-amber-900 text-sm md:text-lg p-2 rounded-2xl my-2 w-full' required />
                        </div>

                        {/* Right Column */}
                        <div>
                            <label className='label md:text-2xl text-amber-900'>Category</label>
                            <select name="category_level" defaultValue={category_level}
                                className='border-2 bg-slate-100 text-amber-900 text-sm md:text-lg p-2 rounded-2xl my-2 w-full'>
                                <option value="" disabled hidden>Select one...</option>
                                <option value="composting">Composting</option>
                                <option value="plant-care">Plant Care</option>
                                <option value="vertical-gardening">Vertical Gardening</option>
                                <option value="hydroponics">Hydroponics</option>
                                <option value="indoor-plants">Indoor Plants</option>
                            </select>

                            <label className='label md:text-2xl text-amber-900'>Availability</label>
                            <select name="availability" defaultValue={availability}
                                className='border-2 bg-slate-100 text-amber-900 text-sm md:text-lg p-2 rounded-2xl my-2 w-full'>
                                <option value="" disabled hidden>Select a category...</option>
                                <option value="public">Public</option>
                                <option value="hidden">Hidden</option>
                            </select>

                            <div className='flex flex-col md:flex-row gap-3'>
                                <div className='w-full'>
                                    <label className='label md:text-2xl text-amber-900'>Name</label>
                                    <input type="text" name="name" value={user.displayName} readOnly
                                        className='border-2 bg-slate-100 text-amber-900 text-sm md:text-lg p-2 rounded-2xl my-2 w-full' required />
                                </div>

                                <div className='w-full'>
                                    <label className='label md:text-2xl text-amber-900'>Email</label>
                                    <input type="email" name="email" value={user.email} readOnly
                                        className='border-2 bg-slate-100 text-amber-900 text-sm md:text-lg p-2 rounded-2xl my-2 w-full' required />
                                </div>
                            </div>

                            <label className='label md:text-2xl text-amber-900'>Description</label>
                            <textarea name="description" defaultValue={description}
                                className='border-2 bg-slate-100 text-amber-900 text-sm md:text-lg p-2 rounded-2xl my-2 w-full' required />
                        </div>
                    </div>

                    <button className='w-full md:text-2xl bg-green-500 py-2 rounded-2xl mt-5 text-white font-bold hover:bg-green-600 hover:text-amber-800 transition duration-300'>
                        Update Now
                    </button>
                </form>
            </div>
        </div>
    );
};

export default UpdateTips;
