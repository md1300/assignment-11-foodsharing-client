import { createBrowserRouter } from "react-router-dom";

import Main from "../Root/Main";
import Home from "../pages/Home/Home";
import LogIn from "../pages/authentication/LogIn";
import Register from "../pages/authentication/Register";
import NotFound from "../Components/NotFound";
import AddFood from "../pages/AddFood/AddFood";
import AvailableFoods from "../pages/AvailableFoods/AvailableFoods";
import FoodDetails from "../pages/FoodDetails/FoodDetails";
import ManageFoods from "../pages/ManageFoods/ManageFoods";
import PrivateRouter from "./PrivateRouter";
import FoodRequest from "../pages/FoodRequest/FoodRequest";
import EditFoodsInfo from "../pages/EditFoodsInfo/EditFoodsInfo";




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
                        path:'/added-food',
                        element:<PrivateRouter><AddFood/></PrivateRouter>
                    },
                    {
                        path:'/available-foods',
                        element:<AvailableFoods/>
                    },
                    {
                        path:'/foodDetails/:id',
                        loader:({params})=>fetch(`${import.meta.env.VITE_ACCESS_URL}/details/${params.id}`),
                        element:<FoodDetails/>
                    },
                    {
                        path:'/manage-food',
                        element:<PrivateRouter><ManageFoods/></PrivateRouter>
                    },
                    {
                        path:'/foods-request',
                        element:<PrivateRouter><FoodRequest/></PrivateRouter>
                    },
                    {
                        path:'/edit-info/:id',
                        loader:({params})=>fetch(`${import.meta.env.VITE_ACCESS_URL}/edit-info/${params.id}`),
                        element:<EditFoodsInfo/>
                    }
                ]
            }
])
   


export default router;