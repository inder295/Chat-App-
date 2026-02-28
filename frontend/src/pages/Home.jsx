import { Chat } from "../components/Chat"
import { Users } from "../components/users"

const Home = () => {
  return (
    <div className="h-[calc(100vh-65px)] bg-slate-100 p-3 overflow-y-hidden ">
      <div className="grid h-full grid-cols-1 gap-3 lg:grid-cols-[24rem_1fr]">
        <div className="h-full">
          <Users/>
        </div>
        <div className="h-full overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
          <Chat/>
        </div>
      </div>
    </div>

  )
}

export default Home
