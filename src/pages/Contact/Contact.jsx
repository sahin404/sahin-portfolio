import { Helmet } from "react-helmet-async"
import { FiPhoneCall } from "react-icons/fi"
import { IoLocationOutline } from "react-icons/io5"
import { MdOutlineEmail } from "react-icons/md"

const Contact = () => {
  return (
    <div className="mt-5">
      <Helmet>
        <title>Sahin | Contact</title>
      </Helmet>
      <div className="flex flex-col lg:flex-row justify-center gap-12 items-center">
        {/* Left */}
        <div className="bg-[#090415] p-6 lg:p-10 md:w-2/3 lg:w-1/2 lg:ml-48 rounded-2xl space-y-5">
          <h1 className="text-2xl text-white">Get in touch</h1>
          <div>
            <div className="flex gap-10 w-full">
              <input type="text" placeholder="First Name" className="w-full p-4 bg-[#1C0F2D] text-gray-300 rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500" />
              <input type="text" placeholder="Last Name" className="w-full p-4 bg-[#1C0F2D] text-gray-300 rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500" />
            </div>
          </div>
          <div>
            <div className="flex gap-10 w-full">
              <input type="email" placeholder="Email" className="w-full p-4 bg-[#1C0F2D] text-gray-300 rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500" />
              <input type="text" placeholder="Phone Number" className="w-full p-4 bg-[#1C0F2D] text-gray-300 rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500" />
            </div>
          </div>
          <div>
            <textarea
              className="w-full h-16 p-4 bg-[#1C0F2D] text-gray-300 rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Message"
            ></textarea>
            {/* Todo: Cursor Allow */}
            <button className="cursor-not-allowed relative overflow-hidden group mt-4 w-full py-3 text-white font-semibold rounded-lg shadow-md">
              <span className="absolute inset-0 bg-gradient-to-r from-[#8e42d6] to-[#411086] transition-opacity duration-200 group-hover:opacity-0"></span>
              <span className="absolute inset-0 bg-gradient-to-r from-[#411086] to-[#8e42d6] opacity-0 transition-opacity duration-200 group-hover:opacity-100"></span>
              <span className="relative z-10">Send Message</span>

            </button>
            <button className="relative overflow-hidden py-3 rounded-3xl text-white">

            </button>
          </div>
        </div>
        {/* Right */}
        <div className="w-1/2 space-y-6 pb-10 lg:pb-0">
          <h1 className="text-2xl text-white "> Contact Information</h1>
          {/* Call */}
          <div className="flex items-center gap-3 text-white">
            <div className="text-2xl text-white bg-[#411086] rounded-full p-3">
              <FiPhoneCall />
            </div>

            <div>
              <h1>Phone</h1>
              <h1>+8801751-569637</h1>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-center gap-3 text-white">
            <div className="text-2xl text-white bg-[#411086] rounded-full p-3">
            <MdOutlineEmail />
            </div>

            <div>
              <h1>Email</h1>
              <h1>sahinraj20@gmail.com</h1>
            </div>
          </div>

          {/* Address */}
         
          <div className="flex items-center gap-3 text-white">
            <div className="text-2xl text-white bg-[#411086] rounded-full p-3">
            <IoLocationOutline />
            </div>

            <div>
              <h1>Address</h1>
              <h1>Rajshahi, Bangladesh</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact