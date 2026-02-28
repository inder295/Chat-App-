import placeholder from "../../public/user-circles-set_78370-4704.avif"

export const ChatHeader = () => {
  return (
    <div className='h-16 shrink-0 sticky top-0 z-10 bg-white text-2xl'>

      <div className='flex h-full items-center'>
        <img src={placeholder} alt="placeholder image " width="60" height="40" className='rounded-full mx-4 my-1 cursor-pointer' />
        <div>
            <h1 className='font-bold  mt-2'>Inderpreet Singh </h1>
             <p className='text-sm text-green-500 '>Online</p>
        </div>
      </div>
    </div>
  )
}


