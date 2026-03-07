import { useEffect, useState } from "react";
import { useAuth } from "../store/useAuth";

const Profile = () => {
 
// const link="https://res.cloudinary.com/cloudinary-marketing/images/c_scale,w_auto,dpr_auto/f_auto,q_auto/v1755186035/website_2021/Image-to-Link/Image-to-Link.png?_i=AA";


const {authUser, updateProfile}=useAuth();

console.log(authUser);


const [formData ,setFormData]=useState({
  fullname:"",
  email:"",
  description:"",
  profilePic:""
})

useEffect(()=>{
  if(authUser){
    setFormData({
      fullname: authUser.fullname || "",
      email: authUser.email || "",
      description: authUser.description || "",
      profilePic: authUser.profilePic || ""
    });
  }
},[authUser])


const [preview,setPreview]=useState(null);

  
const handleSubmit=async(e)=>{
  e.preventDefault();
  
  console.log("Form data before submit:", formData);
  
  // Only send fields that have been changed
  const updateData = {};
  
  if(formData.fullname !== authUser.fullname) updateData.fullname = formData.fullname;
  if(formData.description !== authUser.description) updateData.description = formData.description;
  if(formData.profilePic && formData.profilePic !== authUser.profilePic) {
    updateData.profilePic = formData.profilePic;
  }
  
  console.log("Data to update:", updateData);
  
  if(Object.keys(updateData).length > 0) {
    await updateProfile(updateData);
  } else {
    console.log("No changes to update");
  }
}

const handleChange=(e)=>{
   const name=e.target.name;
   const value=e.target.value;
   setFormData({...formData,[name]:value})
}

const handlePreview=(e)=>{
   const file=e.target.files[0];
   if(file){
     const url=URL.createObjectURL(file);
     setPreview(url);
     
     // Also read the file as base64 for sending to backend
     const reader = new FileReader();
     reader.onload = () => {
       setFormData(prev => ({ ...prev, profilePic: reader.result }));
     };
     reader.readAsDataURL(file);
   } 
}

  return (
    <>
       <div className='max-w-xl mx-auto '>
          <h1 className="text-3xl font-bold my-10 text-center ">Account Details</h1> 
            <form onSubmit={handleSubmit}>
              <label htmlFor="profile-photo"  className="cursor-pointer flex justify-center">
                {
                  authUser.profilePic || preview ? <img src={preview? preview: formData.profilePic} alt="" className="h-40 w-40 rounded-full border border-gray-300" value={formData.profilePic} /> : 
                  
                  <p className="h-40 w-40 rounded-full border border-gray-300 text-center flex justify-center items-center text-2xl text-bold bg-blue-200 ">{authUser.fullname.charAt(0).toUpperCase()} </p>

                }
                <input type="file" id="profile-photo" className="hidden" onChange={handlePreview} />
              </label>
                 
             <div htmlFor="Name" className="mx-auto mt-3 ">
              Fullname 
                <input type="text" name="fullname" className="border w-full rounded p-2 " value={formData.fullname} onChange={handleChange} />

             </div>

            <div htmlFor="Name" className="mx-auto mt-3 " value={formData.email}>
              Email 
                <input type="text" name="email" className="border w-full rounded p-2 bg-gray-200 " readOnly value={formData.email} onChange={handleChange}/>

             </div>

             <div className="mt-3">
              Description
              <textarea name="description" className="border w-full rounded p-2" value={formData.description} onChange={handleChange}/>
             </div>

            <button type="submit" className="w-full p-2 mt-2 rounded bg-blue-500 text-white font-bold hover:bg-blue-400 cursor-pointer">Update</button>

            </form>
       </div>
    
    </>
  )
}

export default Profile
