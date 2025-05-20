import { assets, serviceData } from "@/assets/assets";
import Image from "next/image";
import { useState } from "react";

const Services = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div
      id="services"
      className="w-full px-4 md:px-[12%] py-16 scroll-mt-20 bg-gradient-to-b from-white to-blue-50"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header Section with improved spacing and visual hierarchy */}
        <div className="mb-16 text-center">
          <span className="inline-block px-4 py-1 mb-4 text-sm font-medium text-blue-600 bg-blue-100 rounded-full">
            Services
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            My Skillset
          </h2>

          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Specialized expertise across multiple disciplines with a focus on
            delivering high-quality solutions that drive business growth and
            enhance user experience.
          </p>
        </div>

        {/* Services Grid with improved cards and animations */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {serviceData.map((service, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-xl shadow-md transition-all duration-300 bg-white border border-gray-100"
              style={{
                transform:
                  hoveredIndex === index ? "translateY(-8px)" : "translateY(0)",
                boxShadow:
                  hoveredIndex === index
                    ? "0 10px 25px -5px rgba(59, 130, 246, 0.2)"
                    : "",
              }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Card Content */}
              <div className="p-8">
                {/* Icon with gradient background */}
                <div className="mb-6 p-3 rounded-lg inline-flex bg-gradient-to-br from-blue-50 to-indigo-100">
                  <Image
                    src={service.icon}
                    alt={service.title}
                    className="w-10 h-10"
                    width={40}
                    height={40}
                  />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold mb-4 text-gray-800">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Read more link */}
                <a
                  href={service.link}
                  className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800 transition-colors group"
                >
                  Read more
                  <span className="ml-2 transform transition-transform duration-300 group-hover:translate-x-1">
                    <Image
                      src={assets.right_arrow}
                      alt="Arrow"
                      className="w-4 h-4"
                      width={16}
                      height={16}
                    />
                  </span>
                </a>
              </div>

              {/* Decorative gradient line at the top */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
