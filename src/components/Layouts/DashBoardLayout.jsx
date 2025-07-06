import React, { useState } from 'react';
import Sidebar from '../Components/DashboardComponent/Sidebar';
import { Outlet } from 'react-router';

const DashBoardLayout = () => {
    const [ openDashboard, setOpenDashboard ] = useState(false);

    const handleDashboard = () => {
        setOpenDashboard(!openDashboard);
    }

    return (
        <div className='relative'>
            {/* <button onClick={handleDashboard} className={ `fixed px-4 py-2 rounded-lg bg-green-600/70 backdrop-blur-md top-2 left-2 text-white font-bold` }>DASHBOARD</button>
            {openDashboard ? 'hi' : 'No'} */}

            <div className='flex '>

                <aside className={` fixed top-0 left-0 h-full bg-white dark:bg-slate-900 shadow-lg z-40 w-64 
          transform transition-transform duration-300 ease-in-out ${openDashboard ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 md:static md:shadow-none `} >

                    <Sidebar />
                </aside>

                 <button onClick={handleDashboard} className={ `md:hidden fixed z-50 px-4 py-2 rounded-lg bg-green-600/70 backdrop-blur-md top-2 left-2 text-white font-bold` }>
                 {openDashboard ? 'Close' : 'Dashboard'}
                 </button>

                <main className='flex-1 p-4 overflow-hidden md:mt-0 mt-4'>
                    <Outlet></Outlet>
                </main>
            </div>
        </div>
    );
};

export default DashBoardLayout;