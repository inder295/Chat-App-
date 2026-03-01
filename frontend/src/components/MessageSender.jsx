import { GalleryHorizontal } from 'lucide-react';

export const MessageSender = () => {

  
  return (
    <div className='flex '>
      
          <input type="text" className='w-full focus-within:outline-neutral-500 p-2.5 border-2 border-gray-200 rounded m-2  ' placeholder='Add message' />
            

       <div className='hover:bg-gray-100 cursor-pointer rounded-full mx-2'>
          <input type='file' className='hidden' id="fileUpload" />
          <label htmlFor="fileUpload">
            <GalleryHorizontal className='w-8 h-6 m-2  my-5 mx-4 text-gray-600  cursor-pointer' />
          </label>

       </div>
    
    </div>
  )
}


