import { Search } from 'lucide-react';


export const SearchBar = () => {
  return (
    <div className="m-3">
  <div className="relative">
    <input
      className="w-full rounded-lg border border-slate-200 bg-white py-2.5 pl-3 pr-11 text-sm text-slate-700 shadow-sm transition focus:border-slate-400 focus:outline-none"
      placeholder="Search..." 
    />
    <button
      className="absolute right-1.5 top-1.5 flex cursor-pointer items-center rounded p-2 text-center text-sm text-slate-500 transition-all hover:text-slate-700 disabled:pointer-events-none disabled:opacity-50"
      type="button"
    >
      <Search color="#045843"  />
 
      
    </button> 
  </div>
</div>

  )
}

