import { SearchBar } from "./SearchBar";
import placeholder from "../../public/user-circles-set_78370-4704.avif"
import { useMessage } from "../store/useMessages";
import { useEffect } from "react";
import { useAuth } from "../store/useAuth";


export const Users = () => {

   
    const getUsersData = useMessage(state => state.getUsersData);
    const fetchingUsers = useMessage(state => state.fetchingUsers);
    const users = useMessage(state => state.users);
    const setSelectedUser = useMessage(state => state.setSelectedUser);
    const getMessages=useMessage(state=>state.getMessages);
    const onlineUsers=useAuth(state=>state.onlineUsers)
    
    useEffect(() => {
       getUsersData();
    }, []);

    function handleSelectedUser(user) {
        setSelectedUser(user);
        getMessages(user._id);
    }

    
   
    
 
    return (
    <aside className="h-full w-full overflow-y-auto rounded-xl border border-slate-200 bg-white shadow-sm">
      <SearchBar />

      <div className="pb-2">

        {
         
          users.map((user)=>(
                    <div key={user._id} className="mx-2 flex cursor-pointer items-center gap-3 rounded-lg p-3 transition hover:bg-slate-100" onClick={() => handleSelectedUser(user)}>
                        <div className="relative h-12 w-12 shrink-0">
                            <img src={user.profilePic ? user.profilePic : placeholder} alt={user.fullname} className="h-12 w-12 rounded-full p-0.5" />
                        {
                          onlineUsers.includes(user._id)  &&    <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-white bg-green-500 shadow-sm"></span>

                        }   
                            
                        </div>
            
                        <div className="min-w-0 flex-1">
                            <p className="truncate font-semibold text-slate-800">{user.fullname}</p>
                            <p className="truncate text-sm text-slate-500">Last image</p>
                        </div>
            
                        <div className="flex flex-col items-end gap-1 text-xs">
                            <p className="text-emerald-600">Yesterday</p>
                            <p className="min-w-5 rounded-full bg-emerald-500 px-1.5 text-center font-bold text-white">
                            10
                            </p>
                        </div>
                    </div>

            ))
        }
      </div>
    </aside>
  );
};
