import { createBrowserRouter } from "react-router-dom";

import Main from "../Root/Main";
import Home from "../pages/Home/Home";
import LogIn from "../pages/authentication/LogIn";
import Register from "../pages/authentication/Register";
import NotFound from "../Components/NotFound";
import AddFood from "../pages/AddFood/AddFood";
import AvailableFoods from "../pages/AvailableFoods/AvailableFoods";



const router = createBrowserRouter([
            {
                path:'/',
                errorElement:<NotFound/>,
                element:<Main/>,
                children:[
                    {
                        index:true,
                        element:<Home/>
                    },
                    {
                        path:'/login',
                        element:<LogIn/>
                    },
                    {
                        path:'/register',
                        element:<Register/>
                    },
                    {
                        path:'added-food',
                        element:<AddFood/>
                    },
                    {
                        path:'available-foods',
                        element:<AvailableFoods/>
                    }
                ]
            }
])
   


export default router;