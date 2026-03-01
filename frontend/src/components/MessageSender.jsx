import { GalleryHorizontal ,SendHorizontal} from 'lucide-react';
import { useState } from 'react';
import { useMessage } from '../store/useMessages';


export const MessageSender = () => {

  const [formData,setFormData]=useState({
    text:"",
    image:null
  });

  const {sentMessage,sendingMessage}=useMessage();
  const selectedUser=useMessage((state)=>state.selectedUser)

  async function handleSubmit(e){
    e.preventDefault();      
    await sentMessage(selectedUser._id,formData);
    setFormData({text:"",image:null});
  }

  function handleChange(e){
      const {name,value,files}=e.target;

      if(name=="image"){
        setFormData(prev=> ({...prev,image:files[0]}))
      }else{
        setFormData(prev=> ({...prev,[name]:value }))
      }
  }

  
  


  return (
    <form className='flex ' onSubmit={handleSubmit}>
      
          <input type="text" className='w-full focus-within:outline-neutral-500 p-2.5 border-2 border-gray-200 rounded-2xl m-2 '  placeholder='Add message' name="text" value={formData.text} onChange={handleChange}
           />
            

          <div className='hover:bg-gray-100 cursor-pointer rounded-full ml-2'>
              <input type='file' className='hidden' id="fileUpload" name="image" onChange={handleChange} />
              <label htmlFor="fileUpload">
                <GalleryHorizontal className='w-8 h-6  my-5 ml-4  text-gray-600  cursor-pointer' />
              </label>
          </div>

          <div className='hover:bg-gray-100 cursor-pointer rounded-full mx-2'>
              <button type="submit" disabled={sendingMessage}>
                <SendHorizontal className='w-8 h-6 mr-2  my-5 text-gray-600  cursor-pointer'/>
              </button>
          </div>

    
    </form>
  )
}


