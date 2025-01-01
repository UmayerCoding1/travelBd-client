import { createBrowserRouter } from "react-router";
import Root from "../components/layout/Root";
import Home from "../components/pages/home/Home";
import SignIn from "../components/pages/sign-in/SignIn";
import SignUp from "../components/pages/sign-up/SignUp";
import Profile from "../components/pages/user/profile/Profile";
import PrivetRoute from "./PrivetRoute";

const render = createBrowserRouter([
    {
        path: '/',
        element: <Root/>,
        errorElement: <Error/>,
        children:[
            {
                path: '/',
                element:<Home/>
            },
            // user related route
            {
                path:"profile",
                element: <PrivetRoute><Profile/></PrivetRoute>
            }
        ]
    },
    // auth related
    {path: '/sign-in', element:<SignIn/>},
    {path: '/sign-up', element:<SignUp/>}
    
])

export default render;