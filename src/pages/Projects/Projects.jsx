import { Helmet } from "react-helmet-async"

const Projects = () => {
  return (
    <div>
        <Helmet>
            <title>Sahin | Projects</title>
        </Helmet>
        <div className="flex items-center justify-center mt-20">
            <div className="text-gray-400 text-3xl">Project not found!</div>
        </div>
    </div>
  )
}

export default Projects