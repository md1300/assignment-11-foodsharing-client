import { Link, NavLink } from "react-router-dom";
import useAuth from "../Hook/useAuth";


const Navber = () => {
  const {user,logOut}=useAuth()


const navLink=<div className="lg:flex gap-6 font-sans font-medium">

<NavLink to='/' className={({isActive})=>isActive?'btn btn-ghost text-red-400':'btn btn-ghost'}>home</NavLink>
<NavLink to='available-foods' className={({isActive})=>isActive?'btn btn-ghost text-red-400':'btn btn-ghost'}>Available Foods</NavLink>
<NavLink to='/added-food' className={({isActive})=>isActive?'btn btn-ghost text-red-400':'btn btn-ghost'}>Add Food</NavLink>
<NavLink to='/manage-food' className={({isActive})=>isActive?'btn btn-ghost text-red-400':'btn btn-ghost'}>Manage Foods</NavLink>
<NavLink to='/foods-request' className={({isActive})=>isActive?'btn btn-ghost text-red-400':'btn btn-ghost'}>Foods requests</NavLink>
</div>

    return (
        <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"> 
             {
             navLink
             }
              
          </ul>    
            
          </div>
          <Link to='/' className="btn btn-ghost text-xl">FoodSharing</Link>
        </div>
        <div className="navbar-center hidden lg:flex ">
        <ul className="menu menu-horizontal px-1">
            {navLink}
            
          </ul>
        </div>
        <div className="navbar-end">
        {user?.email? <>       
          <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" data-tip={user.displayName}  className="btn btn-ghost btn-circle avatar tooltip tooltip-left">
        <div className=" rounded-full">
         <img src={user?.photoURL} alt="No photo" />
        </div>
      </div>
      <ul
        tabIndex={0}
        
        className="menu menu-sm dropdown-content bg-slate-200 rounded-box z-50 mt-3 w-52 p-2 shadow">
        <li><button onClick={()=>logOut()}>Logout</button></li>
      </ul>
    </div>
        </>:<Link to='/login' className="btn">Sign In</Link>}
        </div>
      </div>
      
    );
};

export default Navber;