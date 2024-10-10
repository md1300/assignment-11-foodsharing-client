import { useLoaderData } from "react-router-dom";

const FoodDetails = () => {
   const loadedData=useLoaderData()
   console.log(loadedData)
   const {donator_name,pickup_location,food_image,food_name,food_quantity,expire_data,}=loadedData;
    return (
        <div className="flex flex-col items-center">
        <div className="max-w-sm overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 ">
    <div className="px-4 py-2">
        <h1 className="text-xl font-bold text-gray-800 uppercase dark:text-white">{food_name}</h1>
        <h1 className="text-xl font-semibold text-gray-800 uppercase dark:text-white">donator_name : {donator_name}</h1>      
    </div>

    <img src={food_image} alt="no image" />

    <div className=" px-4 py-2">
        <div>
        <h1 className="text-lg font-bold ">pickup_location: {pickup_location}</h1>
        </div>
        <div className="grid grid-cols-2">
            <h1 className="font-medium">quantity : {food_quantity}</h1>
            <h1 className="font-medium">expire_data : {expire_data}</h1>
        </div>
       
    </div>
    <div>
        <button className="btn btn-block font-semibold">request</button>
    </div>
  </div>
</div>
    );
};

export default FoodDetails;