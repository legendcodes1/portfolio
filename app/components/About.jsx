import { assets, infoList, toolsData } from "@/assets/assets";
import Image from "next/image";
import { useState } from "react";

const About = () => {
  const [hoveredTool, setHoveredTool] = useState(null);
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <div
      id="about"
      className="w-full px-4 md:px-[12%] py-16 scroll-mt-20 bg-black text-white"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <div className="mb-12 text-center">
          <span className="inline-block px-4 py-1 mb-4 text-sm font-medium text-cyan-300 bg-cyan-900/30 rounded-full">
            Introduction
          </span>

          <h2
            className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent"
            style={{ fontFamily: "var(--font-secondary)" }}
          >
            About me
          </h2>
        </div>

        {/* Main Flex Container */}
        <div className="flex w-full flex-col lg:flex-row items-center gap-12 lg:gap-20 my-10">
          {/* Image Column with Gradient Border */}
          <div className="w-64 sm:w-80 rounded-3xl relative p-1 bg-gradient-to-br from-cyan-500 to-purple-500">
            <div className="absolute inset-0 rounded-3xl blur-md bg-gradient-to-br from-cyan-500 to-purple-500 opacity-50"></div>
            <div className="relative">
              <Image
                src={assets.user_image2}
                alt="Profile photo"
                className="w-full rounded-3xl"
              />
            </div>
          </div>

          {/* Text Column */}
          <div className="flex-1">
            <p
              className="mb-10 max-w-2xl text-gray-300 text-lg"
              style={{ fontFamily: "var(--font-secondary)" }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repellendus amet sequi soluta suscipit id minima fugit sunt
              commodi unde pariatur ipsum maxime, consequuntur doloribus
              repellat aspernatur iure laudantium velit ducimus.
            </p>

            {/* Info List */}
            <ul className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mb-12">
              {infoList.map(({ icon, iconDark, title, description }, index) => (
                <li
                  key={index}
                  className="flex flex-col gap-2 border border-gray-800 rounded-xl p-6 cursor-pointer bg-gray-900 transition-all duration-300 relative overflow-hidden"
                  style={{
                    transform:
                      hoveredCard === index
                        ? "translateY(-8px)"
                        : "translateY(0)",
                    boxShadow:
                      hoveredCard === index
                        ? "0 10px 25px -5px rgba(6, 182, 212, 0.2)"
                        : "",
                  }}
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  {/* Decorative top border */}
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 to-purple-500"></div>

                  <div className="flex flex-col">
                    <div className="p-2 rounded-lg inline-flex bg-gradient-to-br from-cyan-900 to-purple-900/30 w-fit">
                      <Image
                        src={icon}
                        alt={title}
                        width={28}
                        height={28}
                        className="w-7 filter brightness-0 invert"
                      />
                    </div>
                    <h3
                      className="my-4 text-cyan-300 font-semibold"
                      style={{ fontFamily: "var(--font-secondary)" }}
                    >
                      {title}
                    </h3>
                    <p className="text-sm text-gray-300">{description}</p>
                  </div>
                </li>
              ))}
            </ul>

            {/* Tech Stack Section */}
            <h4
              className="mb-6 text-xl text-cyan-300 font-medium"
              style={{ fontFamily: "var(--font-secondary)" }}
            >
              My tech stack
            </h4>

            <ul className="flex flex-wrap items-center gap-4">
              {toolsData.map((tool, index) => (
                <li
                  key={index}
                  className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-700 rounded-lg cursor-pointer transition-all duration-300 bg-gray-900 relative group"
                  style={{
                    transform:
                      hoveredTool === index
                        ? "translateY(-6px)"
                        : "translateY(0)",
                    borderColor:
                      hoveredTool === index ? "rgb(8, 145, 178)" : "",
                  }}
                  onMouseEnter={() => setHoveredTool(index)}
                  onMouseLeave={() => setHoveredTool(null)}
                >
                  <Image src={tool} alt="Tech tool" className="w-6 sm:w-7 " />

                  {/* Highlight effect on hover */}
                  <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-10 bg-gradient-to-br from-cyan-400 to-purple-500 transition-opacity duration-300"></div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
