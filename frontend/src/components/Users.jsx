import React from 'react'
import photo from "../assets/react.svg"
import { SearchBar } from './SearchBar'

export const Users = () => {
  return (
      <div className='shadow-md h-screen overflow-hidden overflow-y-auto w-full lg:w-96   z-0 mb-4  '>
        <SearchBar/>

        <div className='overscroll-auto'>
            <div className='flex p-4 hover:bg-gray-300 cursor-pointer '>
                <div className="relative w-12 h-12">
            <img
                src={photo}
                alt="user"
                className="rounded-full w-12 h-12  p-0.5"
            />
            <span className="absolute right-0 bottom-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white shadow-sm"></span>
            </div>
            
            <div className='px-4 mr-4 flex justify-between '>
                    <div className='min-w-0 w-42'>
                        <p className='line-clamp-1 truncate font-bold '>Title  </p>
                        <p className='line-clamp-1 truncate'>last image </p>    
                    </div> 
                    

            </div>

            <div className=''>
                        
                        <p className='text-green-500'>Yesterday</p>
                        <p className=' text-white bg-green-500 rounded-full font-bold text-center '>10</p>
                </div>
                 
            </div> 

            


            
            
            

          
         
          

        </div>

       

       
    </div>


    
  )
}


