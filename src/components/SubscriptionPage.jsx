import React, { useState } from 'react';
import { IoMdCheckmarkCircleOutline } from "react-icons/io";


const SubscriptionPage = () => {
    const [selectedPlan, setSelectedPlan] = useState(null);


    const handleSelecedPlane = (planName) => {

        if (selectedPlan === planName) {
            setSelectedPlan(null);
        } else {
            setSelectedPlan(planName);
        }

    }



    return (
        <div className="border-5 border-gray-600 rounded-xl md:p-8 p-10">
            <div>
                <h1 className={`text-3xl font-bold text-center my-3 `}>Subscription Plans</h1>
                <p className={`text-center text-lg font-semibold`}>Upgrade to access, User Roles and Permissions, All Private Tips and Standard Gardeners support.</p>
            </div>


            <div>
                <div></div>
                <div className="grid md:grid-cols-3 gap-5 my-10">

                    <div
                        onClick={() => handleSelecedPlane("basic")}
                        className={`cursor-pointer min-w-sm md:w-[100px] borde-2 border-gray-400 p-10 border rounded-2xl ${selectedPlan === "basic" ? "bg-green-100" : "bg-gray-200"}`}>

                        <span className={`text-xl font-semibold  px-8  border rounded-full py-1 ${selectedPlan === "basic" ? "border-green-600 text-green-600" : 'text-gray-600'}`}>Basic111</span>
                        <div className={`flex items-end gap-3 my-10 ${selectedPlan === "basic" ? "text-green-700" : "text-gray-600"}`}>
                            <div className="flex items-start gap-1">
                                <span className="text-xl font-semibold mt-1">tk</span>
                                <span className="text-6xl font-bold leading-none">600</span>
                            </div>
                            <div className="flex flex-col justify-center mb-2 font-medium leading-tight">
                                <p>/Per User</p>
                                <p>/Per Month</p>
                            </div>
                        </div>
                        <div className='mb-5'>
                            <ol className={`${selectedPlan === "basic" ? "text-green-500" : ""}`}>
                                <li className='flex gap-2 items-center'><IoMdCheckmarkCircleOutline size={25} /> See top tree trending Tips</li>
                                <li className='flex gap-2 items-center'><IoMdCheckmarkCircleOutline size={25} />7 days/month Support</li>
                                <li className='flex gap-2 items-center'><IoMdCheckmarkCircleOutline size={25} />Contact with 3 top gardeners</li>
                            </ol>
                        </div>
                        <button
                            className={`w-full py-2 text-lg rounded-md font-semibold ${selectedPlan === "basic" ? "text-white bg-green-500" : "text-gray-300 bg-gray-600"}`}>
                            {selectedPlan === "basic" ? "Selected Plan" : "Select Plan"}
                        </button>
                    </div>



                    <div
                        onClick={() => handleSelecedPlane("medium")}
                        className={`cursor-pointer min-w-sm md:w-[100px] borde-2 border-gray-400 p-10 border rounded-2xl ${selectedPlan === "medium" ? "bg-green-100" : "bg-gray-200"}`}>

                        <span className={`text-xl font-semibold  px-8  border rounded-full py-1 ${selectedPlan === "medium" ? "border-green-600 text-green-600" : 'text-gray-600'}`}>Medium</span>
                        <div className={`flex items-end gap-3 my-10 ${selectedPlan === "medium" ? "text-green-700" : "text-gray-600"}`}>
                            <div className="flex items-start gap-1">
                                <span className="text-xl font-semibold mt-1">tk</span>
                                <span className="text-6xl font-bold leading-none">1100</span>
                            </div>
                            <div className="flex flex-col justify-center mb-2 font-medium leading-tight">
                                <p>/Per User</p>
                                <p>/Per Month</p>
                            </div>
                        </div>
                        <div className='mb-5'>
                            <ol className={`${selectedPlan === "medium" ? "text-green-500" : ""}`}>
                                <li className='flex gap-2 items-center'><IoMdCheckmarkCircleOutline size={25} />See top 5 trending Tips</li>
                                <li className='flex gap-2 items-center'><IoMdCheckmarkCircleOutline size={25} />15 days/month Support</li>
                                <li className='flex gap-2 items-center'><IoMdCheckmarkCircleOutline size={25} />Contact with 7 top gardeners</li>
                            </ol>
                        </div>
                        <button
                            className={`w-full py-2 text-lg rounded-md font-semibold ${selectedPlan === "medium" ? "text-white bg-green-500" : "text-gray-300 bg-gray-600"}`}>
                            {selectedPlan === "medium" ? "Selected Plan" : "Select Plan"}
                        </button>
                    </div>



                    <div
                        onClick={() => handleSelecedPlane("standard")}
                        className={`cursor-pointer min-w-sm md:w-[100px] borde-2 border-gray-400 p-10 border rounded-2xl ${selectedPlan === "basic" ? "bg-green-100" : "bg-gray-200"}`}>

                        <span className={`text-xl font-semibold  px-8  border rounded-full py-1 ${selectedPlan === "standard" ? "border-green-600 text-green-600" : 'text-gray-600'}`}>Standard</span>
                        <div className={`flex items-end gap-3 my-10 ${selectedPlan === "standard" ? "text-green-700" : "text-gray-600"}`}>
                            <div className="flex items-start gap-1">
                                <span className="text-xl font-semibold mt-1">tk</span>
                                <span className="text-6xl font-bold leading-none">1500</span>
                            </div>
                            <div className="flex flex-col justify-center mb-2 font-medium leading-tight">
                                <p>/Per User</p>
                                <p>/Per Month</p>
                            </div>
                        </div>
                        <div className='mb-5'>
                            <ol className={`${selectedPlan === "standard" ? "text-green-500" : ""}`}>
                                <li className='flex gap-2 items-center'><IoMdCheckmarkCircleOutline size={25} />See top 12 trending Tips</li>
                                <li className='flex gap-2 items-center'><IoMdCheckmarkCircleOutline size={25} />25 days/month Support</li>
                                <li className='flex gap-2 items-center'><IoMdCheckmarkCircleOutline size={25} />Contact with 15 top gardeners</li>
                            </ol>
                        </div>
                        <button
                            className={`w-full py-2 text-lg rounded-md font-semibold ${selectedPlan === "standard" ? "text-white bg-green-500" : "text-gray-300 bg-gray-600"}`}>
                            {selectedPlan === "standard" ? "Selected Plan" : "Select Plan"}
                        </button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default SubscriptionPage;