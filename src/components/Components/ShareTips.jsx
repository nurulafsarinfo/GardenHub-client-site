import React, { use } from 'react';
import { AuthContext } from '../../Provider/AuthContext';
import Swal from 'sweetalert2';


const ShareTips = () => {
    const { user } = use(AuthContext);

    const handleTipsForm = (e) => {
        e.preventDefault()

        const form = e.target;
        const formData = new FormData(form);
        const tipsData = Object.fromEntries(formData.entries());

        fetch('https://garden-hub-server-site.vercel.app/sharedtips', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(tipsData)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "Tips added Successfully! Check 'My Tips' section.",
                        showConfirmButton: false,
                        timer: 2000
                    });
                }
                form.reset()
            })
            .catch(err => console.log(err))



    }
    return (
        <div className='md:mx-20 mx-5'>
            <div className='shadow-2xl border-3 border-gray-200 rounded-2xl   mx-auto my-5 p-3 md:p-8 bg-green-100 '>
                <p className='text-center mb-5  border-b-2 border-dashed border-gray-300 text-amber-900 text-xl font-medium md:text-3xl p-1'>Share Your Tips</p>
                <form onSubmit={handleTipsForm}>

                    <div className='grid grid-cols-2 gap-5 md:gap-10'>
                        <div>
                            <label className='label md:text-2xl  text-amber-900'>Title </label>
                            <br />
                            <input type="text" name="title" placeholder='(e.g., “How I Grow Tomatoes Indoors”)
                    ' className='border-2 bg-slate-100 text-amber-900 md:text-lg text-xs p-2 rounded-lg md:rounded-2xl my-2 w-full ' required />
                            <br />

                            <label className='label md:text-2xl  text-amber-900'>Plant Type/Topic</label>
                            <br />
                            <input type="text" name="plantType" placeholder='Enter your Plant type.' className='border-2 bg-slate-100 text-amber-900 md:text-lg text-xs p-2 rounded-lg md:rounded-2xl my-2 w-full' required />

                            <br />


                            <label className='label md:text-2xl  text-amber-900'>Difficulty Level</label>
                            <br />
                            <select name="level" className='border-2 bg-slate-100 text-amber-900 md:text-lg text-xs p-2 rounded-lg md:rounded-2xl my-2 w-full'>
                                <option disabled selected hidden>Select one... </option>
                                <option value="easy">Easy</option>
                                <option value="medium">Medium</option>
                                <option value="hard">Hard</option>
                            </select>

                            <br />



                            <label className='label md:text-2xl  text-amber-900'>Images URL</label>
                            <br />
                            <input type="url" name="images" placeholder='https://example.com/image.jpg' className='border-2 bg-slate-100 text-amber-900 md:text-lg text-xs p-2 rounded-lg md:rounded-2xl my-2 w-full' required />
                        </div>


                        {/* ------------------------------------------------------------------------------------ */}

                        <div>
                            <label className='label md:text-2xl  text-amber-900'>Category </label>
                            <br />
                            <select name="category_level" className='border-2 bg-slate-100 text-amber-900 md:text-lg text-xs p-2 rounded-lg md:rounded-2xl my-2 w-full'>
                                <option disabled selected hidden>Select one...</option>
                                <option value="composting">Composting</option>
                                <option value="plant-care">Plant Care</option>
                                <option value="vertical-gardening">Vertical Gardening</option>
                                <option value="hydroponics">Hydroponics</option>
                                <option value="indoor-plants">Indoor Plants</option>
                            </select>

                            <br />


                            <label className='label md:text-2xl  text-amber-900'>Availability </label>
                            <br />
                            <select name="availability" className='border-2 bg-slate-100 text-amber-900 md:text-lg text-xs p-2 rounded-lg md:rounded-2xl my-2 w-full'>
                                <option disabled selected hidden>Select a category...</option>
                                <option value="public">Public</option>
                                <option value="hidden">Hidden</option>
                            </select>

                            <div className='flex gap-3'>
                                <div className='w-full'>
                                    <label className='label md:text-2xl  text-amber-900'>Name</label>
                                    <br />
                                    <input type="text" name="name" value={user.displayName} readOnly className='border-2 bg-slate-100 text-amber-900 md:text-lg text-[10px] p-2 rounded-lg md:rounded-2xl my-2 w-full' required />
                                </div>

                                <div className='w-full'>
                                    <label className='label md:text-2xl  text-amber-900'>Email</label>
                                    <br />
                                    <input type="email" name="email" value={user.email} readOnly className='border-2 bg-slate-100 text-amber-900 md:text-lg text-[10px] p-2 rounded-lg md:rounded-2xl my-2 w-full' required />
                                </div>
                            </div>

                            <label className='label md:text-2xl  text-amber-900'>Description</label>
                            <br />
                            <textarea type="text" name="description" placeholder='type your description' className='border-2 bg-slate-100 text-amber-900 md:text-lg text-xs p-2 rounded-md md:rounded-2xl my-2 w-full' required ></textarea>

                        </div>
                    </div>
                    <button className='w-full md:text-2xl bg-green-500 py-2 rounded-full md:rounded-2xl mt-5 text-gray-100 font-bold hover:bg-green-600 hover:text-amber-800 transition duration-300'>Share Now</button>
                </form>

            </div >
        </div>
    );
};

export default ShareTips;


