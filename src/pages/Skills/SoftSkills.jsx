import { IoCameraOutline } from "react-icons/io5";
import { CiVideoOn } from "react-icons/ci";

const SoftSkills = () => {
  const skills = [
    { icon: <IoCameraOutline className="text-4xl text-orange-400" />, name: "Photography" },
    { icon: <CiVideoOn className="text-4xl text-blue-700" />, name: "Video Editing" },
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
      {skills.map((skill, index) => (
        <div
          key={index}
          className="bg-[#0f061a] text-white w-28 px-5 py-5 rounded-3xl flex flex-col items-center border border-transparent hover:border-[#520bb6] duration-500"
        >
          {skill.icon}
          <h1 className="font-semibold">{skill.name}</h1>
        </div>
      ))}
    </div>
  );
};

export default SoftSkills;
