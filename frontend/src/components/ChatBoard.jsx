import { useEffect, useRef } from "react";
import placeholder from "../../public/user-circles-set_78370-4704.avif"
import { useAuth } from '../store/useAuth'
import { useMessage } from "../store/useMessages";


export  const ChatBoard = ({user}) => {

  const {authUser}=useAuth();
  const messages=useMessage((state)=> state.messages);
  const fetchingMessages=useMessage((state)=> state.fetchingMessages);
  const {subscribeToMessages,unSubscribeToMessages}=useMessage();
  const bottomView=useRef(null);

  useEffect(()=>{
    subscribeToMessages();
    return ()=> unSubscribeToMessages();
  },[messages,subscribeToMessages,unSubscribeToMessages])

  useEffect(()=>{
     bottomView.current?.scrollIntoView({behaviour:"smooth"});
  },[messages])
  
  return (
    <div className='bg-gray-100 overflow-y-auto h-[calc(100vh-200px)] '>

      { (
        messages.map((message)=>(
           message.senderId===authUser._id ? (
               <div key={message._id} id="receiver" className='pt-5 px-4 '>

                <div className='flex justify-end gap-2 rounded-xl ' >
                  <span className='p-2 rounded-xl bg-green-200 mt-5 max-w-lg  '>{message.text}</span> 
                  <img src={authUser.profilePic ? authUser.profilePic : placeholder} alt={authUser.fullname} className='h-8 w-8 rounded-full right-0 bottom-0 self-end ' />

                </div>
                <p className='bg-gray-100 text-sm pr-12 italic text-right '>{new Date(message.createdAt).toLocaleTimeString()}</p>
                </div>
           ) : (
                      
                <div key={message._id} id="sender" className='pt-5 px-2'>
                    <div className='flex gap-2 '>
                        <img src={user.profilePic ? user.profilePic : placeholder} alt={user.fullname} className='h-8 w-8 rounded-full self-end  ' />
                          <div className=' max-w-lg text-wrap bg-gray-300 rounded-xl p-2 ' >
                              <span className='my-4 mt-5 '>{message.text}</span> 
                          </div>

                      </div>
                      <p className='bg-gray-100 text-sm pl-12 py-0.5 italic '>{new Date(message.createdAt).toLocaleTimeString()}</p>

      
                </div>
           )
        ))
      )}

    
      
     
    <div ref={bottomView}></div>

    </div>
  )
}


