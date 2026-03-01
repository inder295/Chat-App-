import React from 'react'
import { ChatHeader } from './ChatHeader'
import { ChatBoard } from './ChatBoard'
import { MessageSender } from './MessageSender'
import { useMessage } from '../store/useMessages'

export const Chat = () => {

  const user=useMessage((state)=>state.selectedUser)

  if(!user){
    return <>
       <div className='h-full flex flex-col overflow-hidden'>
         Start chat 
       </div>
    </>
  }


  return (
    <div className='h-full flex flex-col overflow-hidden'>
        <ChatHeader user={user}/>
        <ChatBoard/>
        <MessageSender/>
    </div>
  )
}


