
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import { Pagination } from 'swiper/modules';
import { BiLogoMongodb } from "react-icons/bi"
import { DiJavascript1 } from "react-icons/di"
import { FaGitAlt, FaNodeJs } from "react-icons/fa"
import { GrReactjs } from "react-icons/gr"
import { IoLogoCss3 } from "react-icons/io"
import { SiExpress } from "react-icons/si"
import { TbBrandFirebase, TbBrandTailwind } from "react-icons/tb"
import { TfiHtml5 } from "react-icons/tfi"
// import { TfiHtml5 } from 'react-icons/tfi';

const WebSkills = () => {
    return (
        <div>
            <Swiper
                slidesPerView={`7`}
                spaceBetween={10}
                centeredSlides={true}
                pagination={{
                   
                    clickable: true,
                     el: ".custom-pagination", // Custom class for pagination
                }}
                breakpoints={{
                    320: { slidesPerView: 1 },  // Mobile screens
                    480: { slidesPerView: 2 },  // Small tablets
                    768: { slidesPerView: 4 },  // Tablets
                    1024: { slidesPerView: 6 }, // Laptops
                    1280: { slidesPerView: 7 }, // Large screens
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    {/* HTML */}
                    <div className=" bg-[#0f061a] text-white w-44 px-10 py-10 rounded-3xl flex flex-col items-center space-y-5 mx-5 group border border-transparent hover:border-[#520bb6] duration-500">
                        <TfiHtml5 className="text-7xl transition-transform duration-500 group-hover:scale-110 text-orange-400" />
                        <h1 className="font-semibold">HTML5</h1>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    {/* CSS3 */}
                    <div className="bg-[#0f061a] text-white w-44 px-10 py-10 rounded-3xl flex flex-col items-center space-y-5 mx-5 group border border-transparent hover:border-[#520bb6] duration-500">
                        <IoLogoCss3 className="text-7xl transition-transform duration-500 group-hover:scale-110 text-[#146EB0]" />
                        <h1 className="font-semibold">CSS3</h1>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    {/* Tailwind */}
                    <div className="bg-[#0f061a] text-white w-44 px-10 py-10 rounded-3xl flex flex-col items-center space-y-5 mx-5 group border border-transparent hover:border-[#520bb6] duration-500">
                        <TbBrandTailwind className="text-7xl transition-transform duration-500 group-hover:scale-110 text-[#39B5F3]" />
                        <h1 className="font-semibold">Tailwind</h1>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    {/* Git */}
                    <div className="bg-[#0f061a] text-white w-44 px-10 py-10 rounded-3xl flex flex-col items-center space-y-5 mx-5 group border border-transparent hover:border-[#520bb6] duration-500">
                        <FaGitAlt className="text-7xl transition-transform duration-500 group-hover:scale-110 text-[#F05539]" />
                        <h1 className="font-semibold">Git</h1>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    {/* Firebase */}
                    <div className="bg-[#0f061a] text-white w-44 px-10 py-10 rounded-3xl flex flex-col items-center space-y-5 mx-5 group border border-transparent hover:border-[#520bb6] duration-500">
                        <TbBrandFirebase className="text-7xl transition-transform duration-500 group-hover:scale-110 text-[#DE3308]" />
                        <h1 className="font-semibold">Firebase</h1>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    {/* Javascript */}
                    <div className="bg-[#0f061a] text-white w-44 px-10 py-10 rounded-3xl flex flex-col items-center space-y-5 mx-5 group border border-transparent hover:border-[#520bb6] duration-500">
                        <DiJavascript1 className="text-7xl transition-transform duration-500 group-hover:scale-110 text-[#D7BC39]" />
                        <h1 className="font-semibold">JavaScript</h1>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    {/* React */}
                    <div className="bg-[#0f061a] text-white w-44 px-10 py-10 rounded-3xl flex flex-col items-center space-y-5 mx-5 group border border-transparent hover:border-[#520bb6] duration-500">
                        <GrReactjs className="text-7xl transition-transform duration-500 group-hover:scale-110 text-[#08D9FF]" />
                        <h1 className="font-semibold">ReactJS</h1>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    {/* NodeJs */}
                    <div className="bg-[#0f061a] text-white w-44 px-10 py-10 rounded-3xl flex flex-col items-center space-y-5 mx-5 group border border-transparent hover:border-[#520bb6] duration-500">
                        <FaNodeJs className="text-7xl transition-transform duration-500 group-hover:scale-110 text-[#75BC57]" />
                        <h1 className="font-semibold">Node.js</h1>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    {/* ExpressJs */}
                    <div className="bg-[#0f061a] text-white w-44 px-10 py-10 rounded-3xl flex flex-col items-center space-y-5 mx-5 group border border-transparent hover:border-[#520bb6] duration-500">
                        <SiExpress className="text-7xl transition-transform duration-500 group-hover:scale-110 text-[#93C745]" />
                        <h1 className="font-semibold">Express.js</h1>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    {/* MongoDB */}
                    <div className="bg-[#0f061a] text-white w-44 px-10 py-10 rounded-3xl flex flex-col items-center space-y-5 mx-5 group border border-transparent hover:border-[#520bb6] duration-500">
                        <BiLogoMongodb className="text-7xl transition-transform duration-500 group-hover:scale-110 text-[#55AD47]" />
                        <h1 className="font-semibold">MongoDB</h1>
                    </div>
                </SwiperSlide>
            </Swiper>
            <div className="custom-pagination mt-5 flex justify-center"></div>
        </div>
    )
}

export default WebSkills