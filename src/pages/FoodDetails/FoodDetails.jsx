import { useLoaderData } from "react-router-dom";

const FoodDetails = () => {
   const loadedData=useLoaderData()
   console.log(loadedData)
    return (
        <div>
            <h1>this view details pages</h1>
        </div>
    );
};

export default FoodDetails;