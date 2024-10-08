import Achivement from "../../Components/Achivement";
import Carosul from "../../Components/Carosul";
import FoodFeatures from "../../Components/FoodFeatures";
import OurWork from "../../Components/OurWork";


const Home = () => {
    return (
        <div>
          <h1>this is home page </h1>
          <Carosul/>
          <FoodFeatures/>
          <Achivement/>
          <OurWork/>
        </div>
    );
};

export default Home;