import React from 'react'
import { Search } from 'lucide-react';


export const SearchBar = () => {
  return (
   
    <div class="max-w-sm m-2">
  <div class="relative p-2">
    <input
      class="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md pl-3 pr-12 py-3 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow  "
      placeholder="Search..." 
    />
    <button
      class="absolute top-1 right-1 flex items-center rounded cursor-pointer mr-2 py-3 px-2.5 text-center text-sm text-white transition-all disabled:pointer-events-none disabled:opacity-50 "
      type="button"
    >
      <Search color="#045843"  />
 
      
    </button> 
  </div>
</div>

  )
}

