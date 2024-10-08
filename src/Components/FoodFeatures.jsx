import { useState } from "react";
import FoodCard from "./FoodCard";


const FoodFeatures = () => {
    const [foods,setFoods]=useState([])

    fetch("/src/FakeData/Fake.json")
    .then(res=>res.json())
    .then(data=>setFoods(data))
    return (
        <div className="my-11">
            <div className="flex flex-col gap-3 items-center text-center mb-11">
                <h1 className="text-3xl">Foods Features</h1>
                <p>What makes food so enjoyable—beyond the flavors, textures, and variety it brings to everyday life—is that each one has some unique story behind it </p>
            </div>
       
       <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
       {
        foods.map((food,id)=><FoodCard 
            key={id} 
            food={food}></FoodCard>)
       }
       </div>

        </div>
    );
};

export default FoodFeatures;