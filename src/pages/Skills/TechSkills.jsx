import { FcLinux } from 'react-icons/fc';
import { GiCyberEye } from 'react-icons/gi';
import { TbBrandCpp } from 'react-icons/tb';
import { SiGooglemarketingplatform } from 'react-icons/si';

const TechSkills = () => {
    const skills = [
        { icon: <FcLinux className="text-4xl" />, name: "Linux" },
        { icon: <GiCyberEye className="text-4xl" />, name: "Cyber Security" },
        { icon: <TbBrandCpp className="text-4xl" />, name: "Programming" },
        { icon: <SiGooglemarketingplatform className="text-4xl" />, name: "Digital Marketing" },
    ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
            {skills.map((skill, index) => (
                <div
                    key={index}
                    className="bg-[#0f061a] text-white w-28 px-5 py-5 rounded-3xl flex flex-col items-center border border-transparent hover:border-[#520bb6] duration-500"
                >
                    {skill.icon}
                    <h1 className="font-semibold text-sm mt-2">{skill.name}</h1>
                </div>
            ))}
        </div>
    );
};

export default TechSkills;
