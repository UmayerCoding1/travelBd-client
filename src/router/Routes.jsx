import { createBrowserRouter } from "react-router";
import Root from "../components/layout/Root";

const render = createBrowserRouter([
    {
        path: '/',
        element: <Root/>
    }
    
])

export default render;