import { Outlet } from "react-router-dom"
import { Navbar } from "../pages/Home/Navbar"

const Main = () => {
  return (
    <div className="min-h-screen flex items-center">
      <div className="bg-gradient-to-l from-[#0F0715] to-[#221238] w-[95%] my-10 lg:my-0 lg:h-[90vh] mx-auto rounded-3xl shadow-[0px_10px_50px_rgba(0,0,0,1)] drop-shadow-lg font-sora">
        <Navbar></Navbar>
        <Outlet></Outlet>
      </div>

    </div>


  )
}

export default Main