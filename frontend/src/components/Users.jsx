import React from "react";
import photo from "../assets/react.svg";
import { SearchBar } from "./SearchBar";

export const Users = () => {
  return (
    <aside className="h-full w-full overflow-y-auto rounded-xl border border-slate-200 bg-white shadow-sm">
      <SearchBar />

      <div className="pb-2">
        <div className="mx-2 flex cursor-pointer items-center gap-3 rounded-lg p-3 transition hover:bg-slate-100">
          <div className="relative h-12 w-12 shrink-0">
            <img src={photo} alt="user" className="h-12 w-12 rounded-full p-0.5" />
            <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-white bg-green-500 shadow-sm"></span>
          </div>

          <div className="min-w-0 flex-1">
            <p className="truncate font-semibold text-slate-800">Title</p>
            <p className="truncate text-sm text-slate-500">Last image</p>
          </div>

          <div className="flex flex-col items-end gap-1 text-xs">
            <p className="text-emerald-600">Yesterday</p>
            <p className="min-w-5 rounded-full bg-emerald-500 px-1.5 text-center font-bold text-white">
              10
            </p>
          </div>
        </div>
      </div>
    </aside>
  );
};
