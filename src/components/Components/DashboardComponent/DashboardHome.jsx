import React, { useEffect, useState, useContext } from 'react';
import { AuthContext } from '../../../Provider/AuthContext';

const DashboardHome = () => {
    const { user } = useContext(AuthContext);
    const [gardeners, setGardeners] = useState(0);
    const [totalTips, setTotalTips] = useState(0);
    const [totalMyTips, setTotalMyTips] = useState(0);

    useEffect(() => {
        fetch('https://garden-hub-server-site.vercel.app/gardeners/count')
            .then(res => res.json())
            .then(data => setGardeners(data.total));
    }, []);

    useEffect(() => {
        fetch('https://garden-hub-server-site.vercel.app/sharedtips/count')
            .then(res => res.json())
            .then(data => setTotalTips(data.totalTips));
    }, []);

    useEffect(() => {
        if (user?.email) {
            fetch(`https://garden-hub-server-site.vercel.app/mytips/${user.email}?mode=count`)
                .then(res => res.json())
                .then(data => {
                    // console.log("MyTips count response:", data);
                    setTotalMyTips(data.myTips);
                })
                .catch(err => console.error("Fetch error:", err));
        }
    }, [user?.email]);

    return (
        <div className="p-4 sm:p-6 lg:p-10">
            <h1 className="text-3xl font-bold text-amber-800 mb-8">Welcome to Your Dashboard</h1>

            {/* Profile Card */}
            <section className="bg-gradient-to-br from-green-400 to-yellow-300 p-6 rounded-3xl shadow-2xl max-w-md mx-auto mb-12 ">
                <div className="flex flex-col items-center text-center ">
                    <img
                        src={user?.photoURL}
                        alt="Profile"
                        className="w-24 h-24 md:w-28 md:h-28 rounded-full object-cover border-4 border-white shadow-md"
                    />
                    <h2 className="text-xl md:text-2xl font-semibold text-white mt-4">{user?.displayName}</h2>
                    <p className="text-sm md:text-base text-white/80">{user?.email}</p>
                </div>
            </section>

            {/* Stats Grid */}
            <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <StatCard
                    title="My Shared Tips"
                    value={totalMyTips}
                    gradient="from-green-500 to-yellow-300"
                    icon="🌿"
                />
                <StatCard
                    title="Total Gardeners"
                    value={gardeners}
                    gradient="from-green-600 to-green-400"
                    icon="👨‍🌾"
                />
                <StatCard title="Total Shared Tips" value={totalTips} gradient="from-yellow-400 to-green-300" icon="📚"
                />
            </section>
        </div>
    );
};

// Reusable StatCard component
const StatCard = ({ title, value, gradient, icon }) => {
    return (
        <div className={`bg-gradient-to-br ${gradient} text-white p-6 rounded-2xl shadow-md flex items-center justify-between`}>
            <div>
                <h3 className="text-lg font-semibold">{title}</h3>
                <p className="text-4xl font-bold mt-2">{value}</p>
            </div>
            <div className="text-5xl">{icon}</div>
        </div>
    );
};

export default DashboardHome;
