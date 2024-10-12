
import { useEffect, useState } from "react";
import FoodCard from "./FoodCard";
import axios from "axios";
import { Link } from "react-router-dom";


const FoodFeatures=()=>{
    const [foods,setFoods]=useState([])

    useEffect(()=>{
        const getData=async()=>{
          
             const {data} = await axios(`${import.meta.env.VITE_ACCESS_URL}/added-food`)
            setFoods(data)
         
        }
        getData()
    },[])

    

    
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
       <div className="my-8 text-center">
        <Link to='/available-foods' className="btn btn-ghost p-4 ">See All Foods </Link>
       </div>

        </div>
    );
};

export default FoodFeatures;