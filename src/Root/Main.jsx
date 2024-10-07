import { Outlet } from "react-router-dom";
import Navber from "../share/Navber";
import Footer from "../share/Footer";


const Main = () => {
    return (
        <div>
            <Navber/>
            <div className="min-h-[calc(100vh-132px)]">
            <Outlet/>
            </div>
            <Footer/>
        </div>
    );
};

export default Main;