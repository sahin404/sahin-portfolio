import { Link } from "react-router-dom";

const ProjectCart = ({ image, name, description, link }) => {
    const handleClick = () => {
        window.open(link, "_blank");
    };

    return (
        <article className="group flex flex-col h-full rounded-xl shadow-xl overflow-hidden">
            <img
                alt=""
                src={image}
                className="h-44 w-full rounded-xl object-cover shadow-xl transition group-hover:grayscale-[50%] dark:shadow-gray-700/25"
            />

            <div className="flex flex-col justify-between pt-4 px-4 pb-4 flex-grow">
                <div>
                    <Link onClick={handleClick}>
                        <h3 className="text-lg font-medium text-gray-900 dark:text-white hover:underline">
                            {name}
                        </h3>
                    </Link>

                    <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500 dark:text-gray-400">
                        {description}
                    </p>
                </div>

                <Link onClick={handleClick}>
                    <button className="relative p-3 mt-4 px-10 text-white text-lg rounded-lg bg-gradient-to-r from-[#411086] to-[#8e42d6] hover:scale-105 transform transition-all duration-300">
                        <span className="absolute inset-0 rounded-lg border-2 border-transparent bg-clip-padding bg-gradient-to-r from-[#411086] to-[#8e42d6] animate-pulse opacity-40"></span>
                        {name === "DeliBazar – E-Commerce Website" ? <div><span className="relative z-10">Live</span>
                            <div className="absolute w-full h-full bg-gradient-to-r from-[#411086] to-[#8e42d6] opacity-25 animate-ping rounded-full"></div></div> :
                            <div><span className="relative z-10">Source</span>
                            </div>}

                    </button>
                </Link>
            </div>
        </article>
    );
};

export default ProjectCart;
