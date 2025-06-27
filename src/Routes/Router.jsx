import { createBrowserRouter } from "react-router";
import HomeLayouts from "../components/Layouts/HomeLayouts";
import Home from "../components/Components/Home";
import Footer from "../components/Components/Footer";
import UserProfile from "../components/Components/GardenersProfile";
import Login from "../components/UserMaintain/Login";
import Signup from "../components/UserMaintain/Signup";
import ShareTips from "../components/Components/ShareTips";
import PrivateRoute from "./privateRoute";
import GardenersProfile from "../components/Components/GardenersProfile";
import TipsPageLayout from "../components/Layouts/TipsPageLayout";
import BrowseTips from "../components/Components/TipsComponents/BrowseTips";
import TipsDetails from "../components/Components/TipsComponents/TipsDetails";
import Loader from "../components/Components/Loader";
import MyTips from "../components/Components/TipsComponents/MyTips";
import UpdateTips from "../components/Components/TipsComponents/UpdateTips";
import AllGardeners from "../components/Components/AllGardeners";
import ErrorPage from "../components/Components/ErrorPage";
import DashBoardLayout from "../components/Layouts/DashBoardLayout";
import DashboardHome from "../components/Components/DashboardComponent/DashboardHome";

const router = createBrowserRouter([
    {
        path: '/',
        element: <HomeLayouts></HomeLayouts>,
        children: [
            {
                index: true,
                loader: () => fetch('https://garden-hub-server-site.vercel.app/gardeners/active'),
                hydrateFallbackElement: <Loader></Loader>,
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

                path: '/sharetips',
                element: <PrivateRoute>
                    <ShareTips></ShareTips>
                </PrivateRoute>

            },
            {
                path: '/explorgardeners',
                hydrateFallbackElement: <Loader></Loader>,
                loader: () => fetch('https://garden-hub-server-site.vercel.app/gardeners'),
                element: <AllGardeners></AllGardeners>
            }

        ]
    },
    {
        path: '/tips',
        element: <PrivateRoute>
            <TipsPageLayout></TipsPageLayout>
        </PrivateRoute>,
        children: [
            {    // get all tips 
                path: '/tips/browsetips',
                loader: () => fetch('https://garden-hub-server-site.vercel.app/sharedtips/all'),
                hydrateFallbackElement: <Loader></Loader>,
                element: <PrivateRoute>
                    <BrowseTips></BrowseTips>
                </PrivateRoute>

            },
            {
                path: '/tips/details/:id',
                loader: ({ params }) => fetch(`https://garden-hub-server-site.vercel.app/sharedtips/${params.id}`),
                hydrateFallbackElement: <Loader></Loader>,
                element: <PrivateRoute>
                    <TipsDetails></TipsDetails>
                </PrivateRoute>
            },
            {
                path: "/tips/mytips/:email",
                hydrateFallbackElement: <Loader></Loader>,
                loader: ({ params }) => fetch(`https://garden-hub-server-site.vercel.app/mytips/${params?.email}`).then(res => res.json()),
                element: <PrivateRoute>
                    <MyTips></MyTips>
                </PrivateRoute>
            },
            {
                path: "/tips/updatetips/:id",
                hydrateFallbackElement: <Loader></Loader>,
                loader: ({ params }) => fetch(`https://garden-hub-server-site.vercel.app/sharedtips/${params.id}`),
                element: <PrivateRoute>
                    <UpdateTips></UpdateTips>
                </PrivateRoute>
            }
        ]
    },


    // Dashboard 

    {
        path: "/dashboard",
        element: <PrivateRoute>
            <DashBoardLayout></DashBoardLayout>
        </PrivateRoute>,
        children:[
            {
                path: '/dashboard',
                element: <DashboardHome></DashboardHome>
            },
            {
                paht: '/dashboard/mytips',
                element: <MyTips></MyTips>
            }
        ]
    },
    {
        path: '*',
        element: <ErrorPage></ErrorPage>
    }
])

export default router;