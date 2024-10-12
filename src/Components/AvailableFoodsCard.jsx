import { Link } from "react-router-dom";


const AvailableFoodsCard = ({food}) => {
    const {food_name,food_status, food_quantity,expire_data,donator,food_image,pickup_location,additional_notes,_id}=food ;
    return (
        <div className="w-full max-w-sm overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
        <img src={food_image} alt="no photo" />
    
    
        <div className="px-6 py-4">
            <h1 className="text-xl font-semibold text-gray-800 dark:text-white">{food_name}</h1>
    
            <p className="py-2 text-gray-700 dark:text-gray-400">{additional_notes}</p>
    
            <div className="flex items-center mt-4 text-gray-700 dark:text-gray-200">
                
    
                <h1 className="px-2 text-sm">pickup_location : {pickup_location}</h1>
            </div>
    
            <div className="flex items-center mt-4 text-gray-700 dark:text-gray-200">
              
    
                <h1 className="px-2 text-sm">quentity : {food_quantity}</h1>
                <h1 className="px-2 text-sm">expired : {expire_data}</h1>
            </div>
           
            <div>
                <h1>food_status : {food_status} </h1>
            </div>
    
            <div className="flex items-center mt-4 text-gray-700 dark:text-gray-200 ">
               
    
                <Link to={`/foodDetails/${_id}`} className="btn btn-ghost px-2 text-sm">view details</Link>
            </div>
        </div>
    </div>
    );
};

export default AvailableFoodsCard;