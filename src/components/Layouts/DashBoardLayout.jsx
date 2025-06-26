import React from 'react';
import Sidebar from '../Components/DashboardComponent/Sidebar';
import { Outlet } from 'react-router';

const DashBoardLayout = () => {
    return (
        <div className='flex '>
            <aside>
                <Sidebar />
            </aside>

            <main className='flex-1 p-4'>
                <Outlet></Outlet>
            </main>
        </div>
    );
};

export default DashBoardLayout;