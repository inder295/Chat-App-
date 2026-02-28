import React from 'react'
import { ChatHeader } from './ChatHeader'
import { ChatBoard } from './ChatBoard'
import { MessageSender } from './MessageSender'

export const Chat = () => {
  return (
    <div className='h-full flex flex-col overflow-hidden'>
        <ChatHeader/>
        <ChatBoard/>
        <MessageSender/>
    </div>
  )
}


