import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { Outlet } from 'react-router';
import Banner from '../Components/Banner';
import { ToastContainer } from 'react-toastify';

const HomeLayouts = () => {
    return (
        <div>

            <nav>
                <Navbar></Navbar>
            </nav>
            <header>
                {/* <Banner></Banner> */}
            </header>
            <main>
                <Outlet></Outlet>
            </main>
            <footer>
                {/* <Footer></Footer> */}
            </footer>
            <ToastContainer position="top-right" autoClose={3000}
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