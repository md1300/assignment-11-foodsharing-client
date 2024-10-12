
import { useEffect, useState } from "react";
import FoodCard from "./FoodCard";
import axios from "axios";
import { Link } from "react-router-dom";


const FoodFeatures=()=>{
    const [foods,setFoods]=useState([])
    const [itemsPerPage,setItemsPerPage]=useState(6)
    const [currentPage,setCurrentPage]=useState(1)
    const [count,setCount]=useState(0)

    useEffect(()=>{
        const getData=async()=>{
          
             const {data} = await axios(`${import.meta.env.VITE_ACCESS_URL}/added-food?page=${currentPage}&size=${itemsPerPage}`)
            setFoods(data)
                  
        }
        getData()
    },[currentPage,itemsPerPage])

useEffect(()=>{
   fetch(`${import.meta.env.VITE_ACCESS_URL}/foods-count`)
   .then(res=>res.json())
   .then(data=>setCount(data.count))
   
},[])

    // --------------- handle pagination button --------------
    const handlePaginationButton=(value)=>{
        setCurrentPage(value)
        console.log(value)
    }


    const numberOfPages=Math.ceil(count/itemsPerPage)
    const pages=[...Array(numberOfPages).keys().map(element=>element+1)]
    

    
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
      
       {/* ------------ pagination  ---------------------- */}
       {/* ----------------previous button ----------- */}
       <div className="flex items-center justify-center gap-4  mt-6">
        <button
        disabled={numberOfPages===1} 
        onClick={()=>handlePaginationButton(currentPage-1)}
        className="flex items-center px-5 py-2 text-sm text-gray-700 capitalize transition-colors duration-200 bg-white border rounded-md gap-x-2 hover:bg-gray-100 dark:bg-gray-900 dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-800">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5 rtl:-scale-x-100">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
            </svg>

            <span>
                previous
            </span>
        </button>

       
        {/* ----------numberic button ----------- */}
        
     {
        pages.map(btnNum=><button 
            key={btnNum}
            onClick={()=>handlePaginationButton(btnNum)}
            className={`hidden ${currentPage===btnNum? 'bg-blue-400 text-white':''} px-4 py-2 mx-1 transition-colors duration-300 transform  rounded-md sm:inline hover:bg-blue-500  hover:text-white`}>{btnNum}</button>)
     }
       
        {/* -------next button--------------- */}

        <button
        disabled={currentPage===numberOfPages}
        onClick={()=>handlePaginationButton(currentPage+1)}
        className="flex items-center px-5 py-2 text-sm text-gray-700 capitalize transition-colors duration-200 bg-white border rounded-md gap-x-2 hover:bg-gray-100 dark:bg-gray-900 dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-800">
            <span>
                Next
            </span>

            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5 rtl:-scale-x-100">
                <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
            </svg>
        </button>
    </div>
       {/* ------------------------------------ */}

      
           {/*-----------------------------  */}
           <div className="my-8 text-center">
            <Link to='/available-foods' className="btn btn-ghost p-4 ">See All Foods </Link>
           </div>
     </div>
    );
};

export default FoodFeatures;