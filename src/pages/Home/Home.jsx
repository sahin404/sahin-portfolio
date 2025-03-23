import { Helmet } from "react-helmet-async";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FiGithub } from "react-icons/fi";
import { IoMdDownload } from "react-icons/io";
import { Link } from "react-router-dom";
import { Typewriter } from 'react-simple-typewriter';
import { motion } from "framer-motion";

const Home = () => {
  return (
    <div className="flex flex-col-reverse lg:flex-row items-center mt-8 justify-evenly">
      <Helmet>
        <title>Sahin | Portfolio</title>
      </Helmet>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="text-white mt-10 lg:mt-0 px-10 text-center lg:text-left lg:px-0 lg:w-1/2 space-y-5"
      >
        {/* Name Animation */}
        <motion.h1
          initial={{ opacity: 0, rotateX: 90 }}
          animate={{ opacity: 1, rotateX: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="text-2xl md:text-3xl lg:text-4xl font-semibold"
        >
          Md Sahin Alam
        </motion.h1>

        {/* Typewriter Effect with Scale Animation */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.4 }}
          className="text-3xl md:text-4xl lg:text-5xl font-semibold text-orange-500"
        >
          <Typewriter
            words={["MERN Stack Developer"]}
            loop={false}
            cursor
            cursorStyle="|"
            typeSpeed={100}
            deleteSpeed={50}
          />
        </motion.h1>

        {/* Description Animation */}
        <motion.h1
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.6 }}
          className="text-md lg:text-lg text-justify"
        >
          I am a versatile MERN Stack Developer. My expertise lies in React, Tailwind CSS, and JavaScript, crafting seamless and user-friendly interfaces. On the backend, I am proficient in Node.js, Express.js, and MongoDB, ensuring scalable and efficient solutions.
        </motion.h1>

        {/* Button with Bounce Animation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.8 }}
          className="flex justify-center lg:justify-start items-center md:space-x-4 flex-col space-y-4 md:space-y-0 md:flex-row pb-8 lg:pb-0"
        >
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => window.open('CV.pdf', '_blank')}
            className="flex items-center gap-3 border rounded-3xl p-4 border-[#520bb6] duration-200 hover:bg-[#520bb6] text-sm lg:text-md"
          >
            <span>Download CV </span>
            <IoMdDownload className="text-lg"></IoMdDownload>
          </motion.button>

          {/* Social Icons with Rotation Effect */}
          <motion.div
            initial={{ opacity: 0, rotate: 0 }}
            animate={{ opacity: 1, rotate: 0 }}
            transition={{ duration: 1.2, ease: "easeOut", delay: 1.0 }}
            className="flex gap-4"
          >
            {[
              { link: "https://www.linkedin.com/in/sahin404/", icon: <FaLinkedinIn /> },
              { link: "https://github.com/sahin404", icon: <FiGithub /> },
              { link: "https://www.facebook.com/sahin404", icon: <FaFacebookF /> },
              { link: "https://x.com/sahin404__", icon: <FaXTwitter /> },
            ].map((social, index) => (
              <Link key={index} to={social.link}>
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  whileTap={{ scale: 0.9 }}
                  className="hover:cursor-pointer duration-200 border p-3 rounded-full border-[#520bb6] hover:bg-[#520bb6]"
                >
                  {social.icon}
                </motion.div>
              </Link>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2, ease: "easeOut", delay: 0.4 }} // Matches text animation
      >
        <img
          className="h-72 md:h-96 border-8 border-[#221238] rounded-full shadow-2xl shadow-[#3b2c4e]"
          src="sahin2.png"
          alt="Md Sahin Alam"
        />
      </motion.div>
    </div>
  );
};

export default Home;
