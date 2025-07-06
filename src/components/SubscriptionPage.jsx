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
    };

    return (
        <div className="border border-gray-600 rounded-xl p-4 md:p-8 dark:bg-gray-900">
            <div className="text-center">
                <h1 className="text-3xl font-bold dark:text-gray-100">Subscription Plans</h1>
                <p className="text-lg font-semibold dark:text-gray-400 mt-2">
                    Upgrade to access User Roles, Permissions, Private Tips,<br />
                    and Standard Gardeners support.
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 my-10 justify-items-center">
                {/* === Basic Plan === */}
                <PlanCard
                    plan="basic"
                    price="600"
                    features={[
                        "See top 3 trending Tips",
                        "7 days/month Support",
                        "Contact with 3 top gardeners"
                    ]}
                    selectedPlan={selectedPlan}
                    handleSelect={handleSelecedPlane}
                />

                {/* === Medium Plan === */}
                <PlanCard
                    plan="medium"
                    price="1100"
                    features={[
                        "See top 5 trending Tips",
                        "15 days/month Support",
                        "Contact with 7 top gardeners"
                    ]}
                    selectedPlan={selectedPlan}
                    handleSelect={handleSelecedPlane}
                />

                {/* === Standard Plan === */}
                <PlanCard
                    plan="standard"
                    price="1500"
                    features={[
                        "See top 12 trending Tips",
                        "25 days/month Support",
                        "Contact with 15 top gardeners"
                    ]}
                    selectedPlan={selectedPlan}
                    handleSelect={handleSelecedPlane}
                />
            </div>
        </div>
    );
};





const PlanCard = ({ plan, price, features, selectedPlan, handleSelect }) => {
    const isSelected = selectedPlan === plan;

    return (
        <div
            onClick={() => handleSelect(plan)}
            className={`cursor-pointer w-full max-w-xs border-2 border-gray-400 p-6 rounded-2xl transition duration-300 
                ${isSelected ? "bg-green-100" : "bg-gray-200 dark:bg-gray-800"}
            `}
        >
            <span className={`text-md font-semibold px-6 py-1 border rounded-full 
                ${isSelected ? "border-green-600 text-green-600" : "text-gray-600 dark:text-gray-300"}`}>
                {plan.charAt(0).toUpperCase() + plan.slice(1)}
            </span>

            <div className={`flex flex-col sm:flex-row items-center sm:items-end gap-3 my-6 
                ${isSelected ? "text-green-700" : "text-gray-600 dark:text-gray-300"}`}>
                <div className="flex items-start gap-1">
                    <span className="text-md font-semibold mt-1">tk</span>
                    <span className="text-5xl font-bold leading-none">{price}</span>
                </div>
                <div className="text-center sm:text-left text-sm font-medium leading-tight">
                    <p>/Per User</p>
                    <p>/Per Month</p>
                </div>
            </div>

            <div className='mb-5'>
                <ol className={`text-sm space-y-2 ${isSelected ? "text-green-500" : "text-gray-400"}`}>
                    {features.map((feature, index) => (
                        <li key={index} className='flex gap-2 items-center '>
                            <IoMdCheckmarkCircleOutline size={20} />
                            {feature}
                        </li>
                    ))}
                </ol>
            </div>

            <button className={`w-full py-2 text-lg rounded-md font-semibold transition duration-200 
                ${isSelected ? "text-white bg-green-500" : "text-gray-300 bg-gray-600"}`}>
                {isSelected ? "Selected Plan" : "Select Plan"}
            </button>
        </div>
    );
};

export default SubscriptionPage;
