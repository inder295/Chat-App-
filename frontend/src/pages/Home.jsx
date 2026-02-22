import { Chat } from "../components/Chat"
import { Users } from "../components/users"

const Home = () => {
  return (
    <div className="grid gid-cols-6 ">

      <div className="col-span-1 col-start-1 col-end-1 ">
        <Users/>

      </div>
      <div className="col-span-5 col-start-2 ">
        <Chat/>

      </div>
    </div>

  )
}

export default Home
