import axios from "axios";
import useAuth from "../../Hook/useAuth";
import { useEffect, useState } from "react";


const FoodRequest = () => {
    const [foodsRequests,setFoodsRequests]=useState([])
    const {user}=useAuth()
    const getFoodsRequest=async()=>{
        const {data}=await axios(`${import.meta.env.VITE_ACCESS_URL}/my-request/${user.email}`,{withCredentials:true})
        setFoodsRequests(data)
    }
    useEffect(()=>{
        getFoodsRequest()
    },[user])
    return (
        <div>
            <section className="container px-4 mx-auto">
                <div className="flex items-center gap-x-3">
                    <h2 className="text-lg font-medium text-gray-800 dark:text-white">total requested food</h2>           
                    <span className="px-3 py-1 text-xs text-blue-600 bg-blue-100 rounded-full dark:bg-gray-800 dark:text-blue-400">{foodsRequests.length}</span>
                </div>           
                <div className="flex flex-col mt-6">
                    <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                            <div className="overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg">
                                <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                                    <thead className="bg-gray-50 dark:bg-gray-800">
                                        <tr>
                                            <th scope="col" className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                                <div className="flex items-center gap-x-3">
                                                  
                                                    <span>Donar-Name</span>
                                                </div>
                                            </th>           
                                            <th scope="col" className="px-12 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                                <button className="flex items-center gap-x-2">
                                                    <span>Food-Name</span>
                                                </button>
                                            </th>          
                                            <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                                <button className="flex items-center gap-x-2">
                                                    <span>Expire-Date</span>                
                                                </button>
                                            </th>
            
                                            <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">Request-Date</th>
            
                                            <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">Picked-Up location</th>
            
                                        </tr>
                                    </thead>
                                   {
                                    foodsRequests.map(foodsRequest=> <tbody key={foodsRequest._id} className="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
                                        <tr>
                                            <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                                                <div className="inline-flex items-center gap-x-3">                                       
                                                    <div className="flex items-center gap-x-2">
                                                        <img className="object-cover w-10 h-10 rounded-full" src={FoodRequest.donator_image} alt=""/>
                                                        <div>
                                                            <h2 className="font-medium text-gray-800 dark:text-white ">{foodsRequest
.donator_name}</h2>                  </div>
                                                        </div>
                                                </div>
                                            </td>
                                            <td className="px-12 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                                                <div className="inline-flex items-center px-3 py-1 rounded-full gap-x-2 bg-emerald-100/60 dark:bg-gray-800">
                                                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
            
                                                    <h2 className="text-sm font-normal text-emerald-500">{foodsRequest.food_name}</h2>
                                                </div>
                                            </td>
                                            <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">{foodsRequest.
expire_data}</td>
                                            <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">{foodsRequest.
request_Date}</td>
                                            <td className="px-4 py-4 text-sm whitespace-nowrap">
                                                <div className="flex items-center gap-x-2">                             <p className="px-3 py-1 text-xs text-pink-500 rounded-full dark:bg-gray-800 bg-pink-100/60">{foodsRequest.
pickup_location}</p>
                                                </div>
                                            </td>
                                          
                                        </tr>
            
                                       
                                        
                                    </tbody>)
                                   }
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            
                
            </section>
          
      </div>
    );
};

export default FoodRequest;