import { workData, assets } from "@/assets/assets";
import Image from "next/image";
import { useState } from "react";

const Work = () => {
  const [hoveredProject, setHoveredProject] = useState(null);

  return (
    <div
      id="work"
      className="w-full px-4 md:px-[12%] py-16 scroll-mt-20 bg-black text-white"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <span className="inline-block px-4 py-1 mb-4 text-sm font-medium text-cyan-300 bg-cyan-900/30 rounded-full">
            My portfolio
          </span>

          <h2
            className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent mb-6"
            style={{ fontFamily: "var(--font-secondary)" }}
          >
            My latest work
          </h2>

          <p
            className="text-gray-300 max-w-2xl mx-auto"
            style={{ fontFamily: "var(--font-secondary)" }}
          >
            Explore my recent projects showcasing innovative solutions and
            creative designs that demonstrate my expertise in delivering
            high-quality web applications and digital experiences.
          </p>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 my-12">
          {workData.map((project, index) => (
            <div
              key={index}
              className="relative aspect-square rounded-xl overflow-hidden group cursor-pointer"
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Project Image with Overlay */}
              <div
                style={{ backgroundImage: `url(${project.bgImage})` }}
                className="absolute inset-0 bg-no-repeat bg-cover bg-center transition-transform duration-700 ease-in-out group-hover:scale-110"
              >
                {/* Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300"></div>
              </div>

              {/* Decorative Borders */}
              <div className="absolute inset-0 p-0.5">
                <div className="absolute inset-0 rounded-xl border border-gray-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Project Info Card */}
              <div
                className={`absolute bottom-0 left-0 right-0 p-6 transform transition-transform duration-500 ease-in-out ${
                  hoveredProject === index ? "translate-y-0" : "translate-y-14"
                }`}
              >
                <div className="flex items-end justify-between gap-4">
                  <div className="flex-1">
                    <h3
                      className="text-xl font-bold text-white mb-2"
                      style={{ fontFamily: "var(--font-secondary)" }}
                    >
                      {project.title}
                    </h3>
                    <p
                      className={`text-sm text-gray-300 transition-opacity duration-300 ${
                        hoveredProject === index ? "opacity-100" : "opacity-0"
                      }`}
                    >
                      {project.description}
                    </p>
                  </div>

                  {/* View Project Button */}
                  <a
                    href={project.link || "#"}
                    className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 transform transition-all duration-300 hover:scale-110 flex-shrink-0"
                  >
                    <Image
                      src={assets.send_icon}
                      alt="View project"
                      className="w-4 h-4 filter brightness-0 invert"
                      width={16}
                      height={16}
                    />
                  </a>
                </div>

                {/* Tags - Optional */}
                <div
                  className={`flex gap-2 mt-3 transition-opacity duration-300 ${
                    hoveredProject === index ? "opacity-100" : "opacity-0"
                  }`}
                >
                  {project.technologies?.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs py-1 px-2 rounded-full bg-gray-800 text-gray-300"
                    >
                      {tech}
                    </span>
                  )) || (
                    <>
                      <span className="text-xs py-1 px-2 rounded-full bg-gray-800 text-gray-300">
                        React
                      </span>
                      <span className="text-xs py-1 px-2 rounded-full bg-gray-800 text-gray-300">
                        Tailwind
                      </span>
                    </>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Show More Button */}
        <div className="flex justify-center mt-12">
          <a
            href="#"
            className="group relative px-10 py-3 overflow-hidden rounded-full border border-gray-700 hover:border-cyan-500 transition-colors duration-300"
          >
            {/* Button background effect */}
            <span className="absolute inset-0 w-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 transition-all duration-300 ease-out group-hover:w-full"></span>

            {/* Button content */}
            <span className="relative flex items-center gap-2 text-gray-300 group-hover:text-cyan-300 transition-colors">
              Show more
              <Image
                src={assets.right_arrow_bold}
                alt="Right arrow"
                className="w-4 h-4 filter brightness-0 invert group-hover:translate-x-1 transition-transform"
                width={16}
                height={16}
              />
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Work;
