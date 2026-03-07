import { GalleryHorizontal ,SendHorizontal} from 'lucide-react';
import { useState } from 'react';
import { useMessage } from '../store/useMessages';
import {X} from "lucide-react"


export const MessageSender = () => {

  const [formData,setFormData]=useState({
    text:"",
    image:null
  });
  const [preview,setPreview]=useState(null);
  

  const {sentMessage,sendingMessage}=useMessage();
  const selectedUser=useMessage((state)=>state.selectedUser)

  async function handleSubmit(e){
    e.preventDefault();      
   
    if(formData.text.trim()==="" && !formData.image){
      return;
    }

    await sentMessage(selectedUser._id,formData); 
    
    setFormData({text:"",image:null});
    setPreview(null);
  }

  function handleChange(e){
      const {name,value,files}=e.target;
    
      if(name === "image"){
        if(files && files[0]){
          const reader=new FileReader();
          reader.onload = () => {
            const dataURL = reader.result;
            setPreview(dataURL);
            setFormData(prev => ({ ...prev, image: dataURL }));
          };
          reader.readAsDataURL(files[0]);
          
        }
      }else{
        setFormData(prev=> ({...prev,[name]:value }))
      }
  }

  function removePreview(){
    setPreview(null);
    setFormData(prev => ({...prev, image: null}));
  }


  return (

    <>
      {preview && 
        <div className='flex'>

          <img src={preview} alt="preview image" className='h-20 w-30 pt-1 mx-3  rounded-xl  ' />
             <X className='ml-[-24px] cursor-pointer' onClick={removePreview}/>
        </div>
      }
      
      <form className='flex ' onSubmit={handleSubmit}>
        
            <input type="text" className='w-full focus-within:outline-neutral-500 p-2.5 border-2 border-gray-200 rounded-2xl m-2 '  placeholder='Add message' name="text" value={formData.text} onChange={handleChange}
            />
              

            <div className='hover:bg-gray-100 cursor-pointer rounded-full ml-2'>
                <input type='file' className='hidden' id="fileUpload" name="image" onChange={handleChange} accept="image/*" />
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
    </>
  )
}

