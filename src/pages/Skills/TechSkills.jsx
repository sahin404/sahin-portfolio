import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import { Pagination } from 'swiper/modules';
import { FcLinux } from 'react-icons/fc';
import { GiCyberEye } from 'react-icons/gi';
import { TbBrandCpp } from 'react-icons/tb';
import { SiGooglemarketingplatform } from 'react-icons/si';
const TechSkills = () => {
    return (
        <div>
            <Swiper
                slidesPerView={7}
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
                    {/* Linux */}
                    <div className=" bg-[#0f061a] text-white h-52 w-44 px-10 py-10 rounded-3xl flex flex-col items-center space-y-5 mx-5 group border border-transparent hover:border-[#520bb6] duration-500">
                        <FcLinux className="text-7xl transition-transform duration-500 group-hover:scale-110 text-orange-400" />
                        <h1 className="font-semibold">Linux</h1>
                    </div>
                </SwiperSlide>

                {/* Cyber Security */}
                <SwiperSlide>
                    <div className=" bg-[#0f061a] text-white h-52 w-44 px-10 py-10 rounded-3xl flex flex-col items-center space-y-5 mx-5 group border border-transparent hover:border-[#520bb6] duration-500">
                        <GiCyberEye className="text-7xl transition-transform duration-500 group-hover:scale-110 text-orange-400" />
                        <h1 className="font-semibold ">Cyber Security</h1>
                    </div>
                </SwiperSlide>

                {/* Programming */}
                <SwiperSlide>                    
                    <div className=" bg-[#0f061a] text-white h-52 w-44 px-10 py-10 rounded-3xl flex flex-col items-center space-y-5 mx-5 group border border-transparent hover:border-[#520bb6] duration-500">
                        <TbBrandCpp className="text-7xl transition-transform duration-500 group-hover:scale-110 " />
                        <h1 className="font-semibold ">Programming</h1>
                    </div>
                </SwiperSlide>
                {/* Digital Marketing */}
                <SwiperSlide>                    
                    <div className=" bg-[#0f061a] text-white h-52 w-44 px-10 py-10 rounded-3xl flex flex-col items-center space-y-5 mx-5 group border border-transparent hover:border-[#520bb6] duration-500">
                        <SiGooglemarketingplatform className="text-7xl transition-transform duration-500 group-hover:scale-110 " />
                        <h1 className="font-semibold ">Digital Markeing</h1>
                    </div>
                </SwiperSlide>

            </Swiper>
            <div className="custom-pagination mt-5 flex justify-center"></div>
        </div>
    )
}

export default TechSkills