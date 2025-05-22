import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { Outlet } from 'react-router';

const TipsPageLayout = () => {
    return (
        <div>
            <header>
                <nav>
                    <Navbar></Navbar>
                </nav>
            </header>
            <main>
                <Outlet></Outlet>
            </main>
            <footer>
                {/* <Footer></Footer> */}
            </footer>
        </div>
    );
};

export default TipsPageLayout;