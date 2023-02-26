import { createBrowserRouter } from "react-router-dom";

import LayoutPrivate from "../Layouts/LayoutPrivate";
import LayoutPublic from "../Layouts/LayoutPublic";

import Home from "../Pages/Home";
import DashBoard from "../Pages/DashBoard";
import LogIn from "../Pages/LogIn";
import Register from "../Pages/Register";

export const router = createBrowserRouter([
    {
        path:'/',
        element:<LayoutPublic/>,
        children:[
            {
                index:true,
                element:<Home/>,
            },
            {
                path:'/login',
                element:<LogIn/>,
            },
            {
                path:'/register',
                element:<Register/>,
            },
            {
                path:'/dashboard',
                element:<LayoutPrivate/>,
                children:[
                    {
                        index:true,
                        element:<DashBoard/>
                    }
                ]
            },
        ]
    }
])