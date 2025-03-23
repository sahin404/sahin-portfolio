import { Helmet } from "react-helmet-async";
import WebSkills from '../Skills/WebSkills';
import TechSkills from '../Skills/TechSkills';
import SoftSkills from "./SoftSkills";

const Skills = () => {
  return (
    <div className="w-full flex justify-center">
      <Helmet>
        <title>Sahin | Skills</title>
      </Helmet>
      <div className="grid grid-cols-8 p-5 gap-12">
        <div className="col-span-3">
          <WebSkills />
        </div>
        <div className="col-span-3">
          <TechSkills />
        </div>
        <div className="col-span-2">
          <SoftSkills />
        </div>
      </div>
    </div>
  );
};

export default Skills;
