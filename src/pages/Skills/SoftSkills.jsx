import { IoCameraOutline } from "react-icons/io5";
import { CiVideoOn } from "react-icons/ci";

const SoftSkills = () => {
  const skills = [
    { 
      icon: <IoCameraOutline className="text-lg md:text-2xl lg:text-4xl text-orange-400" />, 
      name: <span className="text-xs lg:text-sm">Photography</span> 
    },
    { 
      icon: <CiVideoOn className="text-lg md:text-2xl lg:text-4xl text-blue-700" />, 
      name: <span className="text-xs lg:text-sm">Video Editing</span> 
    },
  ];

  return (
    <div className="grid grid-cols-3 md:grid-cols-1 lg:grid-cols-2 gap-5 p-3">
      {skills.map((skill, index) => (
        <div
          key={index}
          className="bg-[#0f061a] text-white w-28 h-28 justify-center rounded-3xl flex flex-col items-center border border-transparent hover:border-[#520bb6] duration-500 text-center"
        >
          {skill.icon}
          <h1 className="font-semibold">{skill.name}</h1>
        </div>
      ))}
    </div>
  );
};

export default SoftSkills;
