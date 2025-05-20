import { createBrowserRouter } from "react-router";
import HomeLayouts from "../components/Layouts/HomeLayouts";
import Home from "../components/Components/Home";
import Footer from "../components/Components/Footer";

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
                path: 'footer',
                Component: Footer
            }
        ]
    }
])

export default router;