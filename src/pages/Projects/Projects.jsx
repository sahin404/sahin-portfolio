import { Helmet } from "react-helmet-async"
import ProjectCart from "./ProjectCart"

const Projects = () => {
  return (
    <div>
        <Helmet>
            <title>Sahin | Projects</title>
        </Helmet>
        <div className="grid grid-cols-3 gap-10 p-10">
          <ProjectCart></ProjectCart>
        </div>
    </div>
  )
}

export default Projects