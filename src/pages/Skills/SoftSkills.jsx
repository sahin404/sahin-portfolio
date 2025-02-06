import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import { Pagination } from 'swiper/modules';
import { IoCameraOutline } from 'react-icons/io5';
import { CiVideoOn } from 'react-icons/ci';
const SoftSkills = () => {
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
                {/* Photography */}
                <SwiperSlide>
                    <div className=" bg-[#0f061a] text-white h-52 w-44 px-10 py-10 rounded-3xl flex flex-col items-center space-y-5 mx-5 group border border-transparent hover:border-[#520bb6] duration-500">
                        <IoCameraOutline className="text-7xl transition-transform duration-500 group-hover:scale-110 text-orange-400" />
                        <h1 className="font-semibold">Photography</h1>
                    </div>
                </SwiperSlide>
                {/* Video Editing */}
                <SwiperSlide>
                    <div className=" bg-[#0f061a] text-white h-52 w-44 px-10 py-10 rounded-3xl flex flex-col items-center space-y-5 mx-5 group border border-transparent hover:border-[#520bb6] duration-500">
                        <CiVideoOn className="text-7xl transition-transform duration-500 group-hover:scale-110 text-blue-700" />
                        <h1 className=" font-semibold ">Video Editing</h1>
                    </div>
                </SwiperSlide>

            </Swiper>
            <div className="custom-pagination mt-5 flex justify-center"></div>
        </div>
    )
}

export default SoftSkills