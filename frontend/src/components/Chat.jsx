import React from 'react'
import { ChatHeader } from './ChatHeader'
import { ChatBoard } from './ChatBoard'
import { MessageSender } from './MessageSender'
import { useMessage } from '../store/useMessages'
import meditation from "../../public/meditation.png"

export const Chat = () => {

  const user=useMessage((state)=>state.selectedUser)

  if(!user){
    return <>
       <div className='h-full flex justify-center items-center overflow-hidden'>
          <div className=''>
             <img src={meditation} alt="start Chhat" height="100px" width="150px"  />
              <div className='text-2xl font-bold pl-5'>Start Chat</div>
          </div>
       </div>
    </>
  }


  return (
    <div className='h-full flex flex-col overflow-hidden'>
        <ChatHeader user={user}/>
        <ChatBoard user={user} />
        <MessageSender/>
    </div>
  )
}


