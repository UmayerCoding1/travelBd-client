import { createBrowserRouter } from "react-router";
import Root from "../components/layout/Root";
import Home from "../components/pages/home/Home";

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
    }
    
])

export default render;