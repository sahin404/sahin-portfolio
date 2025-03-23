import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion"; // Importing motion
import WebSkills from '../Skills/WebSkills';
import TechSkills from '../Skills/TechSkills';
import SoftSkills from "./SoftSkills";

const Skills = () => {
  return (
    <div className="w-full flex justify-center">
      <Helmet>
        <title>Sahin | Skills</title>
      </Helmet>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="flex flex-col md:flex-row gap-10 lg:gap-16 md:mt-10"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
          className="col-span-3"
        >
          <WebSkills />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 1 }}
          className="col-span-3"
        >
          <TechSkills />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 1.5 }}
          className="col-span-2"
        >
          <SoftSkills />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Skills;
