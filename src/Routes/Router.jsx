import { createBrowserRouter } from "react-router";
import HomeLayouts from "../components/Layouts/HomeLayouts";
import Home from "../components/Components/Home";
import Footer from "../components/Components/Footer";
import UserProfile from "../components/Components/GardenersProfile";
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
                loader: () => fetch('http://localhost:3000/gardeners'),
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <Signup></Signup>
            },
            {
                path: '/gardentips',
                element
            }

        ]
    }
])

export default router;