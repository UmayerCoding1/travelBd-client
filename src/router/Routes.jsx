import { createBrowserRouter } from "react-router";
import Root from "../components/layout/Root";
import Home from "../components/pages/home/Home";
import SignIn from "../components/pages/sign-in/SignIn";
import SignUp from "../components/pages/sign-up/SignUp";

const render = createBrowserRouter([
    {
        path: '/',
        element: <Root/>,
        errorElement: <Error/>,
        children:[
            {
                path: '/',
                element:<Home/>
            }
        ]
    },
    {path: '/sign-in', element:<SignIn/>},
    {path: '/sign-up', element:<SignUp/>}
    
])

export default render;