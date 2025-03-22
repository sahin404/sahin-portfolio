import { Helmet } from "react-helmet-async"
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import WebSkills from "./WebSkills";
import TechSkills from "./TechSkills";
import SoftSkills from "./SoftSkills";
// import 'react-tabs/style/react-tabs.css';
const Skills = () => {
  return (
    <div>
      <Helmet>
        <title>Sahin | Skills</title>
      </Helmet>
      {/*
  Heads up! 👋

  Plugins:
    - @tailwindcss/forms
*/}
      <Tabs defaultIndex={0}>
        <div className="px-5 md:px-2">
          <TabList className="flex items-center justify-center mb-14 text-center gap-5 text-gray-300">
            <Tab selectedClassName="bg-[#520bb6]" className="border border-[#520bb6] p-3 rounded-3xl font-semibold cursor-pointer text-sm md:text-[16px]">Web Development Skills</Tab>
            <Tab selectedClassName="bg-[#520bb6]" className="border border-[#520bb6] p-3 rounded-3xl font-semibold cursor-pointer text-sm md:text-[16px]">Other Tech Skills</Tab>
            <Tab selectedClassName="bg-[#520bb6]" className="border border-[#520bb6] p-3 rounded-3xl font-semibold cursor-pointer text-sm  md:text-[16px]">Soft Skills</Tab>
          </TabList>

        </div>

        <TabPanel >
          <WebSkills />
        </TabPanel>
        <TabPanel >
          <TechSkills />
        </TabPanel>
        <TabPanel >
          <SoftSkills />
        </TabPanel>
      </Tabs>

    </div>
  )
}

export default Skills