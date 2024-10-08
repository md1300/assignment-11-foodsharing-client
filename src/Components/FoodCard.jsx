

const FoodCard = ({food}) => {
    const {food_name,food_quantity,expired_datetime,donator,food_image,pickup_location,additional_notes}=food ;
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
            <h1 className="px-2 text-sm">expired : {expired_datetime}</h1>
        </div>

        <div className="flex items-center mt-4 text-gray-700 dark:text-gray-200 ">
           

            <button className="btn btn-ghost px-2 text-sm">view details</button>
        </div>
    </div>
</div>
    );
};

export default FoodCard;