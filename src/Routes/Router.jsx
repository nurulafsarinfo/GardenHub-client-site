import { createBrowserRouter } from "react-router";
import HomeLayouts from "../components/Layouts/HomeLayouts";
import Home from "../components/Components/Home";
import Footer from "../components/Components/Footer";
import UserProfile from "../components/Components/GardenersProfile";
import Login from "../components/UserMaintain/Login";
import Signup from "../components/UserMaintain/Signup";
import FormGardenTips from "../components/Components/FormGardenTips";
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

const router = createBrowserRouter([
    {
        path: '/',
        element: <HomeLayouts></HomeLayouts>,
        children: [
            {
                index: true,
                loader: () => fetch('http://localhost:3000/gardeners'),
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
                    <FormGardenTips></FormGardenTips>
                </PrivateRoute>

            },
            {
                path:'/explorgardeners',
                 hydrateFallbackElement: <Loader></Loader>,
                loader: () => fetch('http://localhost:3000/gardeners'),
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
                loader: () => fetch('http://localhost:3000/sharedtips/all'),
                hydrateFallbackElement: <Loader></Loader>,
                element: <PrivateRoute>
                            <BrowseTips></BrowseTips>
                         </PrivateRoute> 
            },
            {
                path: '/tips/details/:id',
                loader: ({params}) => fetch(`http://localhost:3000/sharedtips/${params.id}`),
                hydrateFallbackElement: <Loader></Loader>,
                element: <PrivateRoute>
                             <TipsDetails></TipsDetails>
                         </PrivateRoute>
            },
            {
                path: "/tips/mytips/:email",
                 hydrateFallbackElement: <Loader></Loader>,
                loader: ({params}) => fetch(`http://localhost:3000/mytips/${params?.email}`),
                element: <PrivateRoute>
                            <MyTips></MyTips>
                         </PrivateRoute>
            },
            {
                path: "/tips/updatetips/:id",
                 hydrateFallbackElement: <Loader></Loader>,
                loader: ({params}) => fetch(`http://localhost:3000/sharedtips/${params.id}`),
                element: <PrivateRoute>
                           <UpdateTips></UpdateTips>
                         </PrivateRoute>
            }
        ]
    },
    {
        path: '*',
        element: <ErrorPage></ErrorPage>
    }
])

export default router;