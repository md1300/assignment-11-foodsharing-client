import axios from "axios";
import { useEffect, useState } from "react";
import AvailableFoodsCard from "../../Components/AvailableFoodsCard";


const AvailableFoods = () => {
 const [availableFoods,setAvailableFoods]=useState([])
 const [searchText,setSearchText]=useState([])
 const [sort,setSort]=useState([])
 const [search,setSearch]=useState([])


  // -------------get all available foods data  ------------------
  useEffect(()=>{
    fetch(`${import.meta.env.VITE_ACCESS_URL}/all-available-food/${'available'}`)
    .then(res=>res.json())
    .then(data=>setAvailableFoods(data))
},['available'])
// ----------------------------------------

  const handleSearch=(e)=>{
     e.preventDefault()
     setSearch(searchText)
  }
 
console.log(search)


    const getData=async()=>{
         const {data}=await axios(`${import.meta.env.VITE_ACCESS_URL}/all-available-food?search=${search}&sort=${sort}`)
         setAvailableFoods(data)
    }
    useEffect(()=>{
        getData()
    },[search,sort])

    
    return (
        <div className='container px-6 py-10 mx-auto min-h-[calc(100vh-148px)] flex flex-col justify-between'>
      <div>
        <div className='flex flex-col md:flex-row justify-center gap-5'>
          <div>
          <form onSubmit={handleSearch}>
            <div className='flex p-1 overflow-hidden border rounded-lg    focus-within:ring focus-within:ring-opacity-40 focus-within:border-blue-400 focus-within:ring-blue-300'>
              <input
                className='px-6 py-2 text-gray-700 placeholder-gray-500 bg-white outline-none focus:placeholder-transparent'
                type='text'
                name='search'
                onChange={(e)=>{setSearchText(e.target.value)}}
                value={searchText}
                placeholder='Enter Job Title'
                aria-label='Enter Job Title'
              />

              <button className='px-1 md:px-4 py-3 text-sm font-medium tracking-wider text-gray-100 uppercase transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:bg-gray-600 focus:outline-none'>
                Search
              </button>
            </div>
          </form>
          </div>
          <div>
            <select
              onChange={e=>setSort(e.target.value)}
              name='sort'
              id='sort'
              value={sort}
              className='border p-4 rounded-md'
            >
              <option value=''>Sort By Deadline</option>
              <option value='dsc'>Descending Order</option>
              <option value='asc'>Ascending Order</option>
            </select>

            </div>

            </div>
          
        <div className='grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
          {
        //   ------------- show all available foods data--------------------
        availableFoods.map(availableFood=><AvailableFoodsCard key={availableFood._id} food={availableFood}></AvailableFoodsCard>)

          }
        </div>
         

      <div className='flex justify-center mt-12'>
        
      </div>
    </div>
    </div>
   
    );
};

export default AvailableFoods;