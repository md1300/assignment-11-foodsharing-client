import  { useState } from "react";
import DatePicker from "react-datepicker";
import axios from 'axios'
import "react-datepicker/dist/react-datepicker.css";
const AddFood = () => {
    const [startDate, setStartDate] = useState(new Date());
    const handleAddedFoodButton=async(e)=>{
        e.preventDefault()
        const form=e.target;
        const food_name=form.foodName.value;
        const food_image=form.foodImage.value;
        const food_quantity=form.foodQuantity.value;
        const pickup_location=form.location.value;
        const expire_data=startDate;
        const additional_notes=form.additionalNotes.value;
        const donator_name=form.donatorName.value;
        const donator_image=form.donatorImage.value;
        const donator_email=form.donatorEmail.value;
        const food_status=form.foodStatus.value;
        
        const foodsData={food_name,food_image,food_quantity,pickup_location,expire_data,additional_notes,donator_name,donator_image,donator_email,food_status}

        console.log(foodsData)

       try{
        const {data}=await axios.post(`${import.meta.env.VITE_ACCESS_URL}/added-food`,foodsData)
       console.log(data)
       }
       catch(err){
        console.log(err.message)
       }

    }
    return (
        <section className="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800">
    <h2 className="text-lg font-semibold text-gray-700 capitalize dark:text-white">Account settings</h2>

    <form onSubmit={handleAddedFoodButton}>
        <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
            <div>
                <label className="text-gray-700 dark:text-gray-200" >Food Name</label>
                <input id="username" type="text" name="foodName" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
            </div>

            <div>
                <label className="text-gray-700 dark:text-gray-200" >Food Image</label>
                <input id="emailAddress" type="url" name="foodImage" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"/>
            </div>

            <div>
                <label className="text-gray-700 dark:text-gray-200" >Food Quantity</label>
                <input id="password" name="foodQuantity" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"/>
            </div>

            <div>
                <label className="text-gray-700 dark:text-gray-200" >Pickup Location</label>
                <input id="passwordConfirmation" name="location" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"/>
            </div>
            <div>
                <label className="text-gray-700 dark:text-gray-200" >Expire Date / Time</label>
                <div className="mt-4 border-2">
                <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
                </div>
            </div>
            <div>
                <label className="text-gray-700 dark:text-gray-200" >Additional Notes</label>
                <input id="passwordConfirmation" name="additionalNotes" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"/>
            </div>
            <div>
                <label className="text-gray-700 dark:text-gray-200" >Donator Name</label>
                <input id="passwordConfirmation" name="donatorName" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"/>
            </div>
            <div>
                <label className="text-gray-700 dark:text-gray-200" >Donator Image</label>
                <input id="passwordConfirmation" name="donatorImage" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"/>
            </div>
            <div>
                <label className="text-gray-700 dark:text-gray-200" >Donator email</label>
                <input id="passwordConfirmation" name="donatorEmail" type="email" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"/>
            </div>
            <div>
                <label className="text-gray-700 dark:text-gray-200" >Food Status</label>
                <input id="passwordConfirmation" name="foodStatus" type="text" defaultValue='available' className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"/>
            </div>
        </div>

        <div className="flex justify-end mt-6">
            <button className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">Save</button>
        </div>
    </form>
</section>
    );
};

export default AddFood;