import { useLoaderData } from "react-router-dom";
import useAuth from "../../Hook/useAuth";
import DatePicker from "react-datepicker";
import axios from "axios";

const FoodDetails = () => {
    const {user}=useAuth()
   const loadedData=useLoaderData()
   
   const {donator_name,pickup_location,food_image,food_name,food_quantity,expire_data,_id,}=loadedData;
const handleRequsestButton=async()=>{
    const food_id=_id;
    const user_email=user?.email;
    const request_Date=new Date().toLocaleDateString('en-US')
    const status='requested'
    const requestedData={donator_name,pickup_location,food_image,food_name,food_quantity,expire_data,food_id,user_email,request_Date,status}
    console.log(requestedData)
    try{
         const {data}=await axios.post(`${import.meta.env.VITE_ACCESS_URL}/requset`,requestedData)
         console.log(data)
    }
    catch(err){
        console.log(err.message)
    }

}

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
        <DatePicker />
    </div>
    <div>
        <button onClick={handleRequsestButton} className="btn btn-block font-semibold">request</button>
    </div>
  </div>
</div>
    );
};

export default FoodDetails;