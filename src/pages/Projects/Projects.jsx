import { Helmet } from "react-helmet-async"
import ProjectCart from "./ProjectCart"
import delibazar from '/delibazar.jpg';
import library from '/library.jpg';
import tetris from '/tetris.png';

const Projects = () => {
  return (
    <div>
      <Helmet>
        <title>Sahin | Projects</title>
      </Helmet>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-10 px-12 py-5">
        <ProjectCart
          image={delibazar}
          name="DeliBazar – E-Commerce Website"
          description="Technologies: React.js, Node.js, Express.js, MongoDB, Firebase Authentication"
          link="https://delibazar.onrender.com/"
        ></ProjectCart>
        <ProjectCart
        image={library}
        name="Library Plus – Library Management System"
        description="Technologies: React.js, Node.js, Express.js, MongoDB, Firebase Authentication"
        link="https://github.com/sahin404/library-management-system"
        ></ProjectCart>
        <ProjectCart
        image={tetris}
        name="Tetris Game"
        description="Technologies: Python, Pygame"
        link="https://github.com/sahin404/Python-Tetris-Game"
        ></ProjectCart>
      </div>
    </div>
  )
}

export default Projects