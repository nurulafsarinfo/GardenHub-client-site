import { createBrowserRouter } from "react-router";
import HomeLayouts from "../components/Layouts/HomeLayouts";
import Home from "../components/Components/Home";
import Footer from "../components/Components/Footer";
import UserProfile from "../components/Components/userProfile";
import Login from "../components/UserMaintain/Login";
import Signup from "../components/UserMaintain/Signup";
import Loader from "../components/Components/Loader";

const router = createBrowserRouter([
    {
        path: '/',
        element: <HomeLayouts></HomeLayouts>,
        children: [
            {
                index: true,
                element: <Home></Home>
            },
            {
                path: '/userProfile',
                loader: () => fetch('http://localhost:3000/profile'),
                element: <UserProfile></UserProfile>
            },
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'signup',
                element: <Signup></Signup>
            },
            {
                path: 'loader',
                element: <Loader></Loader>
            }
        ]
    }
])

export default router;