import { Helmet } from "react-helmet-async"
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa"
import { FaXTwitter } from "react-icons/fa6"
import { FiGithub } from "react-icons/fi"
import { IoMdDownload } from "react-icons/io"
import { Link } from "react-router-dom"


const Home = () => {
  return (
    <div className="flex flex-col-reverse lg:flex-row items-center mt-8 justify-evenly">
      <Helmet>
        <title>Sahin | Portfolio</title>
      </Helmet>
      <div className="text-white mt-10 lg:mt-0 px-10 text-center lg:text-left lg:px-0 lg:w-1/2 space-y-5">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold">Md Sahin Alam</h1>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-orange-500">Full Stack Web Developer</h1>
        <h1 className="text-md lg:text-lg text-justify">I build high-performance, user-friendly applications using the MERN stack. My goal is to create modern web solutions that enhance user experience and deliver seamless functionality.</h1>
        <div className="flex justify-center lg:justify-start items-center md:space-x-4 flex-col space-y-4 md:space-y-0 md:flex-row pb-8 lg:pb-0">
          {/* To do: Cursor Allow */}
          <button className=" flex items-center gap-3 border rounded-3xl p-4 border-[#520bb6] duration-200 hover:bg-[#520bb6] cursor-not-allowed text-sm lg:text-md">
            <span>Download CV </span>
            <IoMdDownload className="text-lg"></IoMdDownload>
          </button>
          <div className="flex gap-4">
            <Link to="https://www.linkedin.com/in/sahin404/">
              <div className="hover:cursor-pointer duration-200 border p-3 rounded-full border-[#520bb6] hover:bg-[#520bb6]">
                <FaLinkedinIn />
              </div>
            </Link>
            <Link to="https://github.com/sahin404">
              <div className="hover:cursor-pointer duration-200 border p-3 rounded-full border-[#520bb6] hover:bg-[#520bb6]">
                <FiGithub />
              </div>
            </Link>
            <Link to="https://www.facebook.com/sahin404">
              <div className="hover:cursor-pointer duration-200 border p-3 rounded-full border-[#520bb6] hover:bg-[#520bb6]">
                <FaFacebookF />
              </div>
            </Link>

            <Link to="https://x.com/sahin404__">
              <div className="hover:cursor-pointer duration-200 border p-3 rounded-full border-[#520bb6] hover:bg-[#520bb6]">
                <FaXTwitter />
              </div>
            </Link>
          </div>

        </div>
      </div>
      <div className="">
        <img className="h-72 md:h-96 border-8 border-[#221238] rounded-full shadow-2xl shadow-[#3b2c4e]" src="sahin2.png" alt="" />


      </div>
    </div>
  )
}

export default Home