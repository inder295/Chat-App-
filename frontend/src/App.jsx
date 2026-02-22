import { Navigate, Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./components/Home"
import Singup from "./components/Singup"
import Signin from "./components/Signin"
import Profile from "./components/Profile"
import Settings from "./components/Settings"
import { useAuth } from "./store/useAuth"
import { useEffect } from "react"
import { Loader } from "lucide-react"
import { ToastContainer } from "react-toastify"


function App() {

  const {authUser,checkAuth,isCheckingAuth}=useAuth();

  useEffect(()=>{
      checkAuth();
  },[checkAuth])
  

  if(isCheckingAuth && !authUser){
    return <>
       <div className="flex justify-center items-center h-screen">
          <Loader className="size-10 animate-spin"/>
       </div>
    </>
  }
  

  return (
    <>
      <Navbar/>

      <Routes>
         <Route path="/" element={authUser? <Home/> : <Navigate to="/signin" />} />
         <Route path="/signup" element={!authUser?  <Singup/> : <Navigate to="/"/> } />
         <Route path="/signin" element={!authUser?<Signin/> : <Navigate to="/"/> } />
         <Route path="/profile" element={authUser? <Profile/> : <Navigate to="/signin" />} />
         <Route path="/settings" element={ <Settings/> } />
           

        

      </Routes>

      <ToastContainer/>

      
      
    </>
  )
}

export default App
