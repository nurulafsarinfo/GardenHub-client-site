import React, { use } from 'react';
import { useLoaderData } from 'react-router';
import { AuthContext } from '../../../Provider/AuthContext';
import Swal from 'sweetalert2';

const UpdateTips = () => {
    const { user } = use(AuthContext);
    const data = useLoaderData();
    console.log("updatae data", data)
    const { _id, availability, category_level, description, images, level, plantType, title
    } = data;



    const handleUpdateTips = (e) => {
        e.preventDefault();

        const form = e.target;
        const formData = new FormData(form);
        const updatedTips = Object.fromEntries(formData.entries(formData));
        console.log("Updated tips is ", updatedTips);

        fetch(`http://localhost:3000/updatetips/${_id}`, {
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
                        icon: "success",
                        title: "Update & Modifie Successfully!",
                        timer: 2000,
                        showConfirmButton: false
                    })
                } else {
                    Swal.fire({
                        position: 'center',
                        icon: 'warning',
                        title: "Please! Modifie something!",
                        timer: 2000,
                        showConfirmButton: false
                    })
                }
   
            })
            .catch(err => console.log(err.message));
    }






    return (
        <div>
            <div className='shadow-2xl border-3  border-green-200 rounded-2xl md:w-[500px] w-[400px] mx-auto my-10  p-10 bg-green-100 '>
                <form onSubmit={handleUpdateTips}>
                    <p className='md:text-3xl text-2xl text-green-500 font-bold text-center mb-5'>Update Form</p>


                    <label className='label md:text-2xl text-xl text-amber-900'>Title </label>
                    <br />
                    <input type="text" name="title" defaultValue={title} placeholder='(e.g., “How I Grow Tomatoes Indoors”)
                    ' className='border-2 bg-slate-100 text-amber-900 md:text-lg text-sm p-2 rounded-2xl my-2 w-full ' required />
                    <br />

                    <label className='label md:text-2xl text-xl text-amber-900'>Plant Type/Topic</label>
                    <br />
                    <input type="text" name="plantType" defaultValue={plantType} placeholder='Enter your Plant type.' className='border-2 bg-slate-100 text-amber-900 md:text-lg text-sm p-2 rounded-2xl my-2 w-full' required />

                    <br />


                    <label className='label md:text-2xl text-xl text-amber-900'>Difficulty Level</label>
                    <br />
                    <select name="level" defaultValue={level} className='border-2 bg-slate-100 text-amber-900 md:text-lg text-sm p-2 rounded-2xl my-2 w-full'>
                        <option value='' disabled hidden>Select one... </option>
                        <option value="easy">Easy</option>
                        <option value="medium">Medium</option>
                        <option value="hard">Hard</option>
                    </select>

                    <br />



                    <label className='label md:text-2xl text-xl text-amber-900'>Images URL</label>
                    <br />
                    <input type="url" name="images" defaultValue={images} placeholder='https://example.com/image.jpg' className='border-2 bg-slate-100 text-amber-900 md:text-lg text-sm p-2 rounded-2xl my-2 w-full' required />




                    <label className='label md:text-2xl text-xl text-amber-900'>Category </label>
                    <br />
                    <select name="category_level" defaultValue={category_level} className='border-2 bg-slate-100 text-amber-900 md:text-lg text-sm p-2 rounded-2xl my-2 w-full'>
                        <option value='' disabled hidden>Select one...</option>
                        <option value="composting">Composting</option>
                        <option value="plant-care">Plant Care</option>
                        <option value="vertical-gardening">Vertical Gardening</option>
                        <option value="hydroponics">Hydroponics</option>
                        <option value="indoor-plants">Indoor Plants</option>
                    </select>

                    <br />


                    <label className='label md:text-2xl text-xl text-amber-900'>Availability </label>
                    <br />
                    <select name="availability" defaultValue={availability} className='border-2 bg-slate-100 text-amber-900 md:text-lg text-sm p-2 rounded-2xl my-2 w-full'>
                        <option value='' disabled hidden>Select a category...</option>
                        <option value="public">Public</option>
                        <option value="hidden">Hidden</option>
                    </select>

                    <div className='flex gap-3'>
                        <div className='w-full'>
                            <label className='label md:text-2xl text-xl text-amber-900'>Name</label>
                            <br />
                            <input type="text" name="name" value={user.displayName} readOnly className='border-2 bg-slate-100 text-amber-900 md:text-lg text-sm p-2 rounded-2xl my-2 w-full' required />
                        </div>

                        <div className='w-full'>
                            <label className='label md:text-2xl text-xl text-amber-900'>Email</label>
                            <br />
                            <input type="email" name="email" value={user.email} readOnly className='border-2 bg-slate-100 text-amber-900 md:text-lg text-sm p-2 rounded-2xl my-2 w-full' required />
                        </div>
                    </div>

                    <label className='label md:text-2xl text-xl text-amber-900'>Description</label>
                    <br />
                    <textarea type="text" name="description" defaultValue={description} placeholder='type your description' className='border-2 bg-slate-100 text-amber-900 md:text-lg text-sm p-2 rounded-2xl my-2 w-full' required ></textarea>

                    <button className='w-full md:text-2xl bg-green-500 py-2 rounded-2xl my-10 text-gray-100 font-bold hover:bg-green-600 hover:text-amber-800 transition duration-300'>Share Now</button>
                </form>

            </div >
        </div>
    );
};

export default UpdateTips;