import { useEffect, useRef } from "react";
import placeholder from "../../public/user-circles-set_78370-4704.avif"
import { useAuth } from '../store/useAuth'
import { useMessage } from "../store/useMessages";
import { Reply } from 'lucide-react';



export  const ChatBoard = ({user}) => {
  
  

  const {authUser}=useAuth();
  const messages=useMessage((state)=> state.messages);
  // const fetchingMessages=useMessage((state)=> state.fetchingMessages);
  const {subscribeToMessages,unSubscribeToMessages}=useMessage();
  const {setReplyPreview}=useMessage();
  const bottomView=useRef(null);


  useEffect(()=>{
    subscribeToMessages();
    return ()=> unSubscribeToMessages();
  },[subscribeToMessages,unSubscribeToMessages])

  useEffect(()=>{
     bottomView.current?.scrollIntoView({behaviour:"smooth"});
  },[messages])
  


  function handleReplyPreview(message){
    setReplyPreview(message)
  }

  function getReplySenderName(replyTo) {
    if (!replyTo) return "Unknown";
    const replySenderId =
      typeof replyTo.senderId === "object" ? replyTo.senderId?._id : replyTo.senderId;

    if (String(replySenderId) === String(authUser._id)) return "You";
    return replyTo.senderId?.fullname || "Unknown";
  }

  
  return (
    <>

    
    <div className='bg-gray-100 overflow-y-auto h-[calc(100vh-200px)] '>

      { (
        messages.map((message)=>(
           message.senderId===authUser._id ? (
               <div key={message._id} id="receiver" className='pt-5 px-4 '>
               <div className="flex justify-end">
                  <button className="flex justify-center items-center cursor-pointer" onClick={() => handleReplyPreview(message)}>
                    <Reply className="text-gray-600 m-1"  />
                  </button>
                  <div className='flex justify-end gap-2 rounded-xl ' >
                    <div className="bg-green-200 p-2 rounded-2xl  ">
                      {message.replyTo && (
                                <div className="text-sm bg-gray-100 rounded-xl p-2 mb-2">
                                   <p className="text-green-500 font-semibold">
                                     {getReplySenderName(message.replyTo)}
                                   </p>
                                   <p className="line-clamp-1 truncate text-gray-600">{message.replyTo.text || "Message..."}</p>
                                </div>
                        )}
                    {
                      message.image && 
                      <img src={message.image} alt="" className="h-60 w-80 p-2 rounded-xl hover:cursor-pointer " />
                    }
                    
                    <div className="max-w-xl   ">
                      
                        
                      
                        <p className='p-2 rounded-xl  max-w-lg wrap-break-word'>{message.text}</p> 

                    </div>

                    </div>
                  {
                    authUser.profilePic ? <img src={authUser.profilePic ? authUser.profilePic : placeholder} alt={authUser.fullname} className='h-8 w-8 rounded-full right-0 bottom-0 self-end ' /> :
                    <p className='h-8 w-8 rounded-full right-0 bottom-0 self-end bg-blue-300 flex justify-center items-center'>{authUser.fullname.charAt(0).toUpperCase()}</p>
  
                  } 
                  </div>

               </div>
                <p className='bg-gray-100 text-sm pr-12 italic text-right '>{new Date(message.createdAt).toLocaleTimeString()}</p>
                </div>
           ) : (
                      
                <div key={message._id} id="sender" className='pt-5 px-2'>
                    <div className='flex gap-2 '>
                        <img src={user.profilePic ? user.profilePic : placeholder} alt={user.fullname} className='h-8 w-8 rounded-full self-end  ' />
                        <div className="flex">
                            <div className=' max-w-lg text-wrap bg-gray-300 rounded-xl p-2' >
                              {message.replyTo && (
                                <div className="text-sm bg-gray-100 rounded-xl p-2 mb-2">
                                   <p className="text-green-500 font-semibold">
                                     {getReplySenderName(message.replyTo)}
                                   </p>
                                   <p className="line-clamp-1 truncate text-gray-600">{message.replyTo.text || "Message"}</p>
                                </div>
                              )}
                              
                              {
                                  message.image && <img src={message.image} alt="" className="rounded-xl h-60 w-80 pt-1 px-1 " />
                              }
                              
                                <p className='py-2 px-2 wrap-break-word '>{message.text}</p> 
                            </div>
                             <button className="flex items-center" onClick={() => handleReplyPreview(message)}>
                                <Reply className="text-gray-600 cursor-pointer "  />
                             </button>
                        </div>

                      </div>
                      <p className='bg-gray-100 text-sm pl-12 py-0.5 italic '>{new Date(message.createdAt).toLocaleTimeString()}</p>

      
                </div>
           )
        ))
      )}

    
      
     
    <div ref={bottomView} ></div>

    </div>
    
    </>
  )
}


