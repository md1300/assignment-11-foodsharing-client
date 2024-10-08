import { useContext } from "react";
import Achivement from "../../Components/Achivement";
import Carosul from "../../Components/Carosul";
// import FoodFeatures from "../../Components/FoodFeatures";
import OurWork from "../../Components/OurWork";
import { AuthContext } from "../../provider/AuthProvider";


const Home = () => {
  const {name}=useContext(AuthContext)
  console.log(name)
    return (
        <div>
          <h1>this is home page </h1>
          <Carosul/>
          {/* <FoodFeatures/> */}
          <Achivement/>
          <OurWork/>
        </div>
    );
};

export default Home;