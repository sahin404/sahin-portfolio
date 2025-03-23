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
    const skills = [
        { icon: <TfiHtml5 className="text-4xl text-orange-400" />, name: "HTML5" },
        { icon: <IoLogoCss3 className="text-4xl text-[#146EB0]" />, name: "CSS3" },
        { icon: <TbBrandTailwind className="text-4xl text-[#39B5F3]" />, name: "Tailwind" },
        { icon: <FaGitAlt className="text-4xl text-[#F05539]" />, name: "Git" },
        { icon: <TbBrandFirebase className="text-4xl text-[#DE3308]" />, name: "Firebase" },
        { icon: <DiJavascript1 className="text-4xl text-[#D7BC39]" />, name: "JavaScript" },
        { icon: <GrReactjs className="text-4xl text-[#08D9FF]" />, name: "ReactJS" },
        { icon: <FaNodeJs className="text-4xl text-[#75BC57]" />, name: "Node.js" },
        { icon: <SiExpress className="text-4xl text-[#93C745]" />, name: "Express.js" },
        { icon: <BiLogoMongodb className="text-4xl text-[#55AD47]" />, name: "MongoDB" },
      ];
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
            {skills.map((skill, index) => (
                <div
                    key={index}
                    className="bg-[#0f061a] text-white w-24 px-5 py-5 rounded-3xl flex flex-col items-center border border-transparent hover:border-[#520bb6] duration-500"
                >
                    {skill.icon}
                    <h1 className="font-semibold">{skill.name}</h1>
                </div>
            ))}
        </div>
    )
}

export default WebSkills