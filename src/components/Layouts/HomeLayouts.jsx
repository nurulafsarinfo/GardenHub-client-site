import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { Outlet } from 'react-router';
import { ToastContainer } from 'react-toastify';

const HomeLayouts = () => {
    return (
        <div className='dark:bg-gray-900 '>

            <header>
                <nav>
                    <Navbar></Navbar>
                </nav>
            </header>
            <main>
                <Outlet></Outlet>
            </main>
            <footer>
                <Footer></Footer>
            </footer>


            <ToastContainer position="top-right" autoClose={5000}
                closeOnClick={true}
                pauseOnHover={true}
                hideProgressBar={false}
                draggable={true}
                progress={undefined}
            />
        </div>
    );
};

export default HomeLayouts;