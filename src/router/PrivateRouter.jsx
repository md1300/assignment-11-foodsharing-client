import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hook/useAuth";


const PrivateRouter = ({children}) => {
    const location=useLocation()
    const {user,loading}=useAuth()
    if(loading){
        return <h1>loading-------------------</h1>
    }
   if(user){
    return children
   }
  
   return <Navigate to='/login' state={location.pathname} replace:true/>
};

export default PrivateRouter;