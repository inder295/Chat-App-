import React from 'react'

export  const ChatBoard = () => {
  return (
    <div className='bg-gray-100 overflow-y-auto h-[calc(100vh-200px)] '>

      <div id="sender" className='pt-5 px-2'>
      <div className=' max-w-lg text-wrap bg-gray-300 rounded-xl p-2 ' >
        <span className='my-4 mt-5 '>Hii my name is inderpreet , Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis, Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident, qui. </span> 
      </div>
      <p className='bg-gray-100 text-sm pl-2 py-0.5 italic '>12:50pm</p>
 
      </div>
      
      <div id="receiver" className='pt-5 px-4 '>

          <div className='flex justify-end  rounded-xl ' >
            <span className='p-2 rounded-xl bg-green-200 mt-5 max-w-lg  '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, voluptate. Labore laborum unde tempore aperiam saepe rerum fugit aliquam enim! </span> 

          </div>
          <p className='bg-gray-100 text-sm pr-2 italic text-right '>12:50pm</p>
      </div>


    </div>
  )
}


