import {  useLoaderData, useNavigate } from "react-router-dom";
import useAuth from "../../Hook/useAuth";
import DatePicker from "react-datepicker";
import axios from "axios";
import Swal from 'sweetalert2'

const FoodDetails = () => {
    const {user}=useAuth()
   const loadedData=useLoaderData()
   const navigate=useNavigate()
   
   const {donator_name,pickup_location,food_image,food_name,food_quantity,expire_data,_id,donator_email}=loadedData;
const handleRequsestButton=async(id)=>{
    console.log(id)
    const food_id=_id;
    const user_email=user?.email;
    const request_Date=new Date().toLocaleDateString('en-US')
    const status='requested'
    const requestedData={donator_name,pickup_location,food_image,food_name,food_quantity,expire_data,food_id,user_email,request_Date,status,donator_email}
    console.log(requestedData)
    // try{
    //      const {data}=await axios.post(`${import.meta.env.VITE_ACCESS_URL}/requset`,requestedData)
    //      const {data2}=await axios.delete(`${import.meta.env.VITE_ACCESS_URL}/delete/${id}`)
    //      console.log(data2)
    //      if(data.acknowledged){
    //           Swal.fire('your request successfull')
    //      }
    //    return navigate('/')
    // }
    // catch(err){
    //     console.log(err.message)
    // }

    if(donator_email!==user?.email){
        try{
            const {data}=await axios.post(`${import.meta.env.VITE_ACCESS_URL}/requset`,requestedData)
            const {data2}=await axios.delete(`${import.meta.env.VITE_ACCESS_URL}/delete/${id}`)
            console.log(data2)
            if(data.acknowledged){
                 Swal.fire('your request successfull')
            }
          return navigate('/')
       }
       catch(err){
           console.log(err.message)
       }

    }

    return (
        Swal.fire('you do not request food because your email is same in donar email') && navigate('/')
        
    )
    
    
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
        <button onClick={()=>handleRequsestButton(_id)} className="btn btn-block font-semibold">request</button>
    </div>
  </div>
</div>
    );
};

export default FoodDetails;